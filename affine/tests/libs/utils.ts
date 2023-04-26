import { ok } from 'node:assert';
import { resolve } from 'node:path';

import type { PageMeta } from '@blocksuite/store';
import { faker } from '@faker-js/faker';
import type { Page } from '@playwright/test';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const user1 = require('@affine-test/fixtures/built-in-user1.json');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const user2 = require('@affine-test/fixtures/built-in-user2.json');

export const rootDir = resolve(__dirname, '..', '..');
// assert that the rootDir is the root of the project
// eslint-disable-next-line @typescript-eslint/no-var-requires
ok(require(resolve(rootDir, 'package.json')).name.toLowerCase() === 'affine');

export const testResultDir = resolve(rootDir, 'test-results');

export async function getBuiltInUser() {
  return Promise.all([
    fetch('http://localhost:3000/api/user/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'DebugLoginUser',
        email: user1.email,
        password: user1.password,
      }),
    }).then(r => r.json()),
    fetch('http://localhost:3000/api/user/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'DebugLoginUser',
        email: user2.email,
        password: user2.password,
      }),
    }).then(r => r.json()),
  ]);
}

export async function createFakeUser(
  userA = {
    name: faker.name.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  },
  userB = {
    name: faker.name.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  }
) {
  try {
    const response = await Promise.all([
      fetch('http://127.0.0.1:3000/api/user/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'DebugLoginUser',
          email: userA.email,
          password: userA.password,
        }),
      }),
      fetch('http://127.0.0.1:3000/api/user/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'DebugLoginUser',
          email: userB.email,
          password: userB.password,
        }),
      }),
    ]);
    return Promise.all(
      response.map(res => {
        if (!res.ok) {
          throw new Error('User not found');
        }
        return res.json();
      })
    );
  } catch (e) {
    const response = await Promise.all([
      // Register user A
      fetch('http://localhost:3000/api/user/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'DebugCreateUser',
          ...userA,
        }),
      }),
      // Register user B
      fetch('http://localhost:3000/api/user/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'DebugCreateUser',
          ...userB,
        }),
      }),
    ]);
    return Promise.all(response.map(res => res.json()));
  }
}

export async function loginUser(
  page: Page,
  token: {
    refresh: string;
    token: string;
  }
) {
  await page.evaluate(async token => {
    // @ts-ignore
    globalThis.setLogin(token);
  }, token);
}

export async function getMetas(page: Page): Promise<PageMeta[]> {
  return page.evaluate(
    () => globalThis.currentWorkspace.blockSuiteWorkspace.meta.pageMetas ?? []
  );
}
