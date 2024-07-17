import { render, screen } from '@testing-library/react'
import { test, expect } from '@playwright/test';
import { Button } from '../src/components/Button/Button';
import React from 'react';

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

test('react', async ({ page }) => {
  // await page.locator('_react=Button').click();

  render(<Button onClick={() => {}}>Click me</Button> );

  const button = await screen.getByRole('button');
  expect(button).toHaveTextContent('Click me');

})
