// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('Compteur à 0', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  const counterValue = await page.textContent('#counter');
  expect(counterValue).toBe('0');
});

test('Compteur à 2 après deux clics', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.click('#increment'); 
  await page.click('#increment');
  const counterValue = await page.textContent('#counter');
  expect(counterValue).toBe('2');
});