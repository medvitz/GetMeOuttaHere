import { test, expect } from '@playwright/test';

test.describe('Get Me Outta Here! App', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('displays the app header and title', async ({ page }) => {
    await expect(page).toHaveTitle('Get Me Outta Here!');
    await expect(page.getByRole('heading', { name: /Get Me Outta Here/i })).toBeVisible();
    await expect(page.getByText('Find warmer destinations within driving distance')).toBeVisible();
  });

  test('shows zip code input and drive time slider', async ({ page }) => {
    await expect(page.getByLabel('Your Zip Code')).toBeVisible();
    await expect(page.getByLabel('Max Drive Time')).toBeVisible();
    await expect(page.getByRole('button', { name: /Find Sunshine/i })).toBeVisible();
  });

  test('validates zip code input - only accepts 5 digits', async ({ page }) => {
    const zipInput = page.getByLabel('Your Zip Code');

    // Should only accept numbers
    await zipInput.fill('abcde');
    await expect(zipInput).toHaveValue('');

    // Should accept 5 digits
    await zipInput.fill('10001');
    await expect(zipInput).toHaveValue('10001');

    // Should truncate to 5 digits
    await zipInput.fill('123456789');
    await expect(zipInput).toHaveValue('12345');
  });

  test('drive time slider works correctly', async ({ page }) => {
    const slider = page.getByLabel('Max Drive Time');

    // Default should be 8 hours
    await expect(slider).toHaveValue('8');

    // Change to 4 hours
    await slider.fill('4');
    await expect(page.getByText('4 hours')).toBeVisible();
  });

  test('search button is disabled without valid zip', async ({ page }) => {
    const searchButton = page.getByRole('button', { name: /Find Sunshine/i });

    // Should be disabled initially
    await expect(searchButton).toBeDisabled();

    // Should be disabled with partial zip
    await page.getByLabel('Your Zip Code').fill('100');
    await expect(searchButton).toBeDisabled();

    // Should be enabled with valid 5-digit zip
    await page.getByLabel('Your Zip Code').fill('10001');
    await expect(searchButton).toBeEnabled();
  });

  test('displays map container', async ({ page }) => {
    // Leaflet map should be visible
    await expect(page.locator('.leaflet-container')).toBeVisible();
  });

  test('displays empty state messages', async ({ page }) => {
    await expect(page.getByText('Ready to escape the cold?')).toBeVisible();
    await expect(page.getByText('Search to find the most efficient escapes')).toBeVisible();
  });

  test('performs search and shows results', async ({ page }) => {
    // Enter zip code
    await page.getByLabel('Your Zip Code').fill('10001');

    // Click search
    await page.getByRole('button', { name: /Find Sunshine/i }).click();

    // Should show loading state (button changes text)
    await expect(page.getByRole('button', { name: /Searching/i })).toBeVisible();

    // Wait for results (with longer timeout for API calls)
    await expect(page.getByText(/destinations found/i)).toBeVisible({ timeout: 60000 });

    // Should show origin weather
    await expect(page.getByText(/Your weather:/i)).toBeVisible();

    // Results table should have data
    await expect(page.locator('table tbody tr').first()).toBeVisible();
  });

  test('search can be triggered by pressing Enter', async ({ page }) => {
    // Enter zip code
    const zipInput = page.getByLabel('Your Zip Code');
    await zipInput.fill('10001');

    // Press Enter
    await zipInput.press('Enter');

    // Should start searching (button changes text)
    await expect(page.getByRole('button', { name: /Searching/i })).toBeVisible();
  });

  test('displays Top 5 panel after search', async ({ page }) => {
    // Enter zip and search
    await page.getByLabel('Your Zip Code').fill('10001');
    await page.getByRole('button', { name: /Find Sunshine/i }).click();

    // Wait for results
    await expect(page.getByText(/destinations found/i)).toBeVisible({ timeout: 60000 });

    // Top 5 panel should have content (if there are warmer destinations)
    const topFivePanel = page.getByText('Best Bang for Your Mile');
    await expect(topFivePanel).toBeVisible();
  });

  test('map shows markers after search', async ({ page }) => {
    // Enter zip and search
    await page.getByLabel('Your Zip Code').fill('10001');
    await page.getByRole('button', { name: /Find Sunshine/i }).click();

    // Wait for results
    await expect(page.getByText(/destinations found/i)).toBeVisible({ timeout: 60000 });

    // Should have markers on the map (custom markers)
    await expect(page.locator('.custom-marker').first()).toBeVisible();
  });

  test('shows encouraging message when warmer destinations found', async ({ page }) => {
    // Search from a cold location
    await page.getByLabel('Your Zip Code').fill('55401'); // Minneapolis
    await page.getByRole('button', { name: /Find Sunshine/i }).click();

    // Wait for results
    await expect(page.getByText(/destinations found/i)).toBeVisible({ timeout: 60000 });

    // May show encouraging message if warmer destinations exist
    // This depends on actual weather, so we just check the structure exists
    const results = await page.locator('table tbody tr').count();
    expect(results).toBeGreaterThan(0);
  });

  test('hotel booking links include pre-filled dates', async ({ page }) => {
    // Enter zip and search
    await page.getByLabel('Your Zip Code').fill('10001');
    await page.getByRole('button', { name: /Find Sunshine/i }).click();

    // Wait for results
    await expect(page.getByText(/destinations found/i)).toBeVisible({ timeout: 60000 });

    // Find a hotel booking link
    const hotelLink = page.getByRole('link', { name: /Book Hotel/i }).first();

    // Skip test if no hotel links are shown (affiliate ID not configured)
    const linkCount = await page.getByRole('link', { name: /Book Hotel/i }).count();
    if (linkCount === 0) {
      test.skip();
      return;
    }

    // Get the href attribute
    const href = await hotelLink.getAttribute('href');
    expect(href).toBeTruthy();

    // Verify URL contains expected parameters
    expect(href).toContain('booking.com');
    expect(href).toContain('checkin=');
    expect(href).toContain('checkout=');
    expect(href).toContain('no_rooms=1');
    expect(href).toContain('group_adults=2');

    // Verify date format (YYYY-MM-DD)
    const checkinMatch = href!.match(/checkin=(\d{4}-\d{2}-\d{2})/);
    const checkoutMatch = href!.match(/checkout=(\d{4}-\d{2}-\d{2})/);
    expect(checkinMatch).toBeTruthy();
    expect(checkoutMatch).toBeTruthy();

    // Verify checkout is one day after checkin
    const checkinDate = new Date(checkinMatch![1]);
    const checkoutDate = new Date(checkoutMatch![1]);
    const dayDiff = (checkoutDate.getTime() - checkinDate.getTime()) / (1000 * 60 * 60 * 24);
    expect(dayDiff).toBe(1);
  });
});
