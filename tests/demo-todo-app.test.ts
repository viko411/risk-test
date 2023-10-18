import { test, expect, type Page } from '@playwright/test';

// test.beforeEach(async ({ page }) => {
//   await page.goto('');
// });

const stageLink = 'https://vk.com';
// const stageLogin = '';
// const stagePass = '';

test('TEST', async ({ page }) => {
  await page.goto(stageLink);
  await page.getByPlaceholder('Email').click();
  await page.pause();
  expect(1).toBe(1);
});
