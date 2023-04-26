import { test } from '@affine-test/kit/playwright';
import { expect } from '@playwright/test';

import { openHomePage } from '../libs/load-page';
import {
  clickPageMoreActions,
  getBlockSuiteEditorTitle,
  newPage,
  waitMarkdownImported,
} from '../libs/page-logic';
import { assertCurrentWorkspaceFlavour } from '../libs/workspace';

test('New a page and open it ,then favorite it', async ({ page }) => {
  await openHomePage(page);
  await waitMarkdownImported(page);
  await newPage(page);
  await getBlockSuiteEditorTitle(page).click();
  await getBlockSuiteEditorTitle(page).fill('this is a new page to favorite');
  await page.getByRole('link', { name: 'All pages' }).click();
  const cell = page.getByRole('cell', {
    name: 'this is a new page to favorite',
  });
  expect(cell).not.toBeUndefined();

  await cell.click();
  await clickPageMoreActions(page);
  const favoriteBtn = page.getByTestId('editor-option-menu-favorite');
  await favoriteBtn.click();
  await assertCurrentWorkspaceFlavour('local', page);
});

test('Export to html and markdown', async ({ page }) => {
  await openHomePage(page);
  await waitMarkdownImported(page);
  {
    await clickPageMoreActions(page);
    await page.getByTestId('export-menu').click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByTestId('export-to-markdown').click();
    await downloadPromise;
  }
  await page.waitForTimeout(50);
  {
    await clickPageMoreActions(page);
    await page.getByTestId('export-menu').click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByTestId('export-to-html').click();
    await downloadPromise;
  }
});

test('Cancel favorite', async ({ page }) => {
  await openHomePage(page);
  await waitMarkdownImported(page);
  await newPage(page);
  await getBlockSuiteEditorTitle(page).click();
  await getBlockSuiteEditorTitle(page).fill('this is a new page to favorite');
  await page.getByRole('link', { name: 'All pages' }).click();
  const cell = page.getByRole('cell', {
    name: 'this is a new page to favorite',
  });
  expect(cell).not.toBeUndefined();

  await cell.click();
  await clickPageMoreActions(page);

  const favoriteBtn = page.getByTestId('editor-option-menu-favorite');
  await favoriteBtn.click();

  // expect it in favorite list
  await page.getByRole('link', { name: 'Favorites' }).click();
  expect(
    page.getByRole('cell', { name: 'this is a new page to favorite' })
  ).not.toBeUndefined();

  // cancel favorite

  await page.getByRole('link', { name: 'All pages' }).click();

  const box = await page
    .getByRole('cell', { name: 'this is a new page to favorite' })
    .boundingBox();
  //hover table record
  await page.mouse.move((box?.x ?? 0) + 10, (box?.y ?? 0) + 10);

  await page.getByTestId('favorited-icon').click();

  // expect it not in favorite list
  await page.getByRole('link', { name: 'Favorites' }).click();
  expect(
    page.getByText(
      'Tips: Click Add to Favorites/Trash and the page will appear here.'
    )
  ).not.toBeUndefined();
  await assertCurrentWorkspaceFlavour('local', page);
});
