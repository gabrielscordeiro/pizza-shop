import { expect,test } from '@playwright/test'

test('sign in successfully', async ({ page }) => {
    await page.goto('/sign-in', { waitUntil: 'networkidle' })

    await page.getByLabel('Your email:').fill('johndoe@example.com')
    await page.getByRole('button', { name: 'Access Dashboard' }).click()

    const toast = await page.getByText('We send an authentication link to your email.')

    await expect(toast).toBeVisible()

})

test('sign in with wrong credentials', async ({ page }) => {
    await page.goto('/sign-in', { waitUntil: 'networkidle' })

    await page.getByLabel('Your email:').fill('wrong@example.com')
    await page.getByRole('button', { name: 'Access Dashboard' }).click()

    const toast = await page.getByText('An error has occurred. Try again later!')

    await expect(toast).toBeVisible()

})

test('navigate to new restaurant page', async ({ page }) => {
    await page.goto('/sign-in', { waitUntil: 'networkidle' })

    await page.getByRole('link', { name: 'Create a new account' }).click()

    expect(page.url()).toContain('/sign-up')

})