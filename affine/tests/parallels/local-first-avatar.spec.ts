import { test } from '@affine-test/kit/playwright';
import { expect } from '@playwright/test';

import { openHomePage } from '../libs/load-page';
import { newPage, waitMarkdownImported } from '../libs/page-logic';
import { assertCurrentWorkspaceFlavour } from '../libs/workspace';

test('should create a page with a local first avatar', async ({ page }) => {
  await openHomePage(page);
  await waitMarkdownImported(page);
  await newPage(page);
  await page.getByTestId('workspace-name').click();
  await page.getByTestId('new-workspace').click({ delay: 50 });
  await page
    .getByTestId('create-workspace-input')
    .type('Test Workspace 1', { delay: 50 });
  await page.getByTestId('create-workspace-button').click();
  await page.getByTestId('workspace-name').click();
  await page.getByTestId('workspace-card').nth(1).click();
  await page.getByTestId('slider-bar-workspace-setting-button').click();
  await page
    .getByTestId('upload-avatar')
    .setInputFiles('./tests/fixtures/smile.png');
  await page.getByTestId('workspace-name').click();
  await page.getByTestId('workspace-card').nth(0).click();
  await page.waitForTimeout(1000);
  await page.getByTestId('workspace-name').click();
  await page.getByTestId('workspace-card').nth(1).click();
  const blobUrl = await page
    .getByTestId('workspace-avatar')
    .locator('img')
    .getAttribute('src');
  // out user uploaded avatar
  expect(blobUrl).toContain('blob:');
  await assertCurrentWorkspaceFlavour('local', page);
});
