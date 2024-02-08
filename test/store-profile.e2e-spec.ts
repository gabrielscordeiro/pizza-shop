import { expect, test } from '@playwright/test'

test('update profile successfully', async ({ page }) => {
    //networkidle informs that it will wait until all requests are completed
    await page.goto('/', { waitUntil: 'networkidle' })

    await page.getByRole('button', { name: 'Pizza Shop' }).click()
    await page.getByRole('menuitem', { name: 'Store profile' }).click()

    await page.getByLabel('Name').fill('Rocket Pizza')
    await page.getByLabel('Description').fill('Another description')


    await page.getByRole('button', { name: 'Save' }).click()

    //will wait all HTTP requests to complete from this moment
    await page.waitForLoadState('networkidle')


    const toast = page.getByText('Profile updated successfully!')

    expect(toast).toBeVisible()


    await page.getByRole('button', { name: 'Close' }).click()

    await page.waitForTimeout(200)

    expect(page.getByRole('button', { name: 'Rocket Pizza' })).toBeVisible()
})