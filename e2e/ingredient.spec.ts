import { BREAK_POINTS } from '@/app/ui/Recipe/recipe-list';
import { test, expect } from '@playwright/test';
import data from './mocks/recipes.json' with { type: 'json' };

test.describe('desktop ingredients page', { tag: '@desktop' }, () => {
  test.beforeEach('navigate to ingredient page', async ({ page, baseURL }) => {
    /* Mock api recipes */
    await page.route(
      baseURL + '/api/recipes?ingredients=tomato',
      async (route) => {
        const response = await route.fetch();
        const json = data;
        await route.fulfill({ response, json });
      }
    );
    await page.goto('/ingredient');
  });

  test('User add ingredient and generate recipe', async ({ page }) => {
    await page.getByPlaceholder('Eg : Eggs, beef, avocado...').fill('tomato');

    await expect(
      page.getByRole('button').filter({ hasText: 'Generate recipes' })
    ).toBeDisabled();

    await page.getByRole('button', { name: 'Add' }).click();

    await expect(page.getByTestId('tag-ingredient')).toContainText('tomato');

    await expect(
      page.getByRole('button').filter({ hasText: 'Generate recipes' })
    ).toBeEnabled();

    await page
      .getByRole('button')
      .filter({ hasText: 'Generate recipes' })
      .click();

    /* New recipes appears  */
    await expect(page.getByTestId('carousel')).toBeInViewport();

    /* Pagination appears  */
    await expect(page.getByTestId('carousel')).toBeInViewport();
    // Test foncitonnalité de la pagination
  });

  test('recipe display carousel', async ({ page, viewport }) => {
    await page.getByPlaceholder('Eg : Eggs, beef, avocado...').fill('tomato');

    await page.getByRole('button', { name: 'Add' }).click();

    await page
      .getByRole('button')
      .filter({ hasText: 'Generate recipes' })
      .click();

    await expect(page.getByTestId('number-recipes-found')).toContainText(
      `${data.length} recipes found`
    );

    const viewportWidth = viewport?.width ?? 0;

    if (viewportWidth <= 769) {
      test.info().skip(true, 'Skipping on mobile viewport');
      return;
    }
    await expect(page.getByTestId('card-recipe')).toHaveCount(4);
    // Verify if first button of pagination is checked
    expect(page.getByTestId('btn-pagination-1')).toBeChecked();

    // Change page
    await page.getByTestId('btn-pagination-2').check();
    await expect(page.getByTestId('btn-pagination-2')).toBeChecked();
  });
});

test('recipe display grid', async ({ page, viewport, baseURL }) => {
  await page.route(
    baseURL + '/api/recipes?ingredients=tomato',
    async (route) => {
      const response = await route.fetch();
      const json = await response.json();
      json.push(data);
      // Fulfill using the original response, while patching the response body
      // with the given JSON object.
      await route.fulfill({ response, json });
    }
  );
  await page.getByPlaceholder('Eg : Eggs, beef, avocado...').fill('tomato');

  await page.getByRole('button', { name: 'Add' }).click();

  await page
    .getByRole('button')
    .filter({ hasText: 'Generate recipes' })
    .click();

  /* desktop */
  const viewportWidth = viewport?.width ?? 0;
  test.skip(!viewportWidth && viewportWidth > BREAK_POINTS, 'Small viewport');
  await expect(page.getByTestId('card-recipe')).not.toHaveCount(4);
});
