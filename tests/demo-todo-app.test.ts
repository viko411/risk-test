import { test, expect, type Page } from '@playwright/test';

// test.beforeEach(async ({ page }) => {
//   await page.goto('https://makeup.com.ua/');
// });

// const prodLink = 'https://hotels.cloudbeds.com/';
// const prodLogin = 'yevhen.pashniak+23@cloudbeds.com';
// const prodPass = 'McWell07!';

const stageLink = 'https://hotels.stage-ga.cloudbeds-dev.com/';
const stageLogin = 'yevhen.pashniak+50@cloudbeds.com';
const stagePass = 'McWell1001!';

test('TEST', async ({ page }) => {
  await page.goto(stageLink);
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill(stageLogin);
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByPlaceholder('Password').fill(stagePass);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Menu' }).click();
  await page.getByTestId('menu-house-account').click();
  await page.getByRole('link', { name: 'Edited Name_heteu' }).click();
  await page.getByRole('button', { name: 'Add / Adjust Charge ' }).click();
  await page.getByRole('link', { name: 'Adjust Charge' }).click();
  await page.locator('button[name="adjustEl"]').click();
  // const locator = await page.getByRole('group').locator('#fee_29892').innerHTML();
  // console.log('🚀 ~ locator:', locator);
  // await page.getByRole('group').locator('#fee_29892').dblclick();
  await page.locator(`//div[contains(@class, "dropdown-menu open")]//span[text()="ertheetyh"]`).click();
  await page.pause();
  
  // await page.locator('//*[@id="tree_fee_taxes"]//a[text()="111111 (0%)"]').innerHTML();
  // await page.locator('#fee_43465_0').click();
  

  await page.pause();
  expect(1).toBe(1);
});
