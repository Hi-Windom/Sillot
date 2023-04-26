import { DebugLogger } from '@affine/debug';
import { prefixUrl } from '@affine/env';
import {
  createUserApis,
  createWorkspaceApis,
} from '@affine/workspace/affine/api';
import { currentAffineUserAtom } from '@affine/workspace/affine/atom';
import type { LoginResponse } from '@affine/workspace/affine/login';
import { parseIdToken, setLoginStorage } from '@affine/workspace/affine/login';
import { rootStore } from '@affine/workspace/atom';

const affineApis = {} as ReturnType<typeof createUserApis> &
  ReturnType<typeof createWorkspaceApis>;
Object.assign(affineApis, createUserApis(prefixUrl));
Object.assign(affineApis, createWorkspaceApis(prefixUrl));

const debugLogger = new DebugLogger('affine-debug-apis');

if (!globalThis.AFFINE_APIS) {
  globalThis.AFFINE_APIS = affineApis;
  globalThis.setLogin = (response: LoginResponse) => {
    rootStore.set(currentAffineUserAtom, parseIdToken(response.token));
    setLoginStorage(response);
  };
  const loginMockUser1 = async () => {
    const user1 = await import('@affine-test/fixtures/built-in-user1.json');
    const data = await fetch(prefixUrl + 'api/user/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'DebugLoginUser',
        email: user1.email,
        password: user1.password,
      }),
    }).then(r => r.json());
    setLogin(data);
  };
  const loginMockUser2 = async () => {
    const user2 = await import('@affine-test/fixtures/built-in-user2.json');
    const data = await fetch(prefixUrl + 'api/user/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'DebugLoginUser',
        email: user2.email,
        password: user2.password,
      }),
    }).then(r => r.json());
    setLogin(data);
  };

  globalThis.AFFINE_DEBUG = {
    loginMockUser1,
    loginMockUser2,
  };
}

declare global {
  // eslint-disable-next-line no-var
  var setLogin: typeof setLoginStorage;
  // eslint-disable-next-line no-var
  var AFFINE_APIS:
    | undefined
    | (ReturnType<typeof createUserApis> &
        ReturnType<typeof createWorkspaceApis>);
  // eslint-disable-next-line no-var
  var AFFINE_DEBUG: Record<string, unknown>;
}

export { affineApis };
