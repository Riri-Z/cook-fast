import { test, expect } from '@playwright/test';

test('has title and redirect to ingredient page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('/');
  // Find an element with the text 'About' and click on it
  await expect(page.getByTestId('title')).toContainText('Leftovers Magic');

  await page.getByRole('button', { name: 'Get started' }).click();
  // Check redirect to ingredient page
  await expect(page).toHaveURL('/ingredient');
});
