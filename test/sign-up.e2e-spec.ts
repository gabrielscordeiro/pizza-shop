import { expect, test } from '@playwright/test'

test('sign up successfully', async ({ page }) => {
    //networkidle informs that it will wait until all requests are completed
    await page.goto('/sign-up', { waitUntil: 'networkidle' })

    await page.getByLabel('Restaurant name:').fill('Pizza Shop')
    await page.getByLabel('Your name:').fill('John Doe')
    await page.getByLabel('Your email:').fill('johndoe@example.com')
    await page.getByLabel('Your phone number:').fill('99999-9999')

    await page.getByRole('button', { name: 'Register' }).click()

    const toast = page.getByText('Restaurant successfully registered.')

    expect(toast).toBeVisible()
})

test('sign up with error', async ({ page }) => {
    await page.goto('/sign-up', { waitUntil: 'networkidle' })

    await page.getByLabel('Restaurant name:').fill('Invalid name')
    await page.getByLabel('Your name:').fill('John Doe')
    await page.getByLabel('Your email:').fill('johndoe@example.com')
    await page.getByLabel('Your phone number:').fill('99999-9999')

    await page.getByRole('button', { name: 'Register' }).click()

    const toast = page.getByText('Error when registering restaurant')

    expect(toast).toBeVisible()
})

test('navigate to new login page', async ({ page }) => {
    await page.goto('/sign-up', { waitUntil: 'networkidle' })

    await page.getByRole('link', { name: 'Already have an account? Log in' }).click()

    expect(page.url()).toContain('/sign-in')

})