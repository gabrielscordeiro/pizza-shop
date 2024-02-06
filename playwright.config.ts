import { defineConfig } from '@playwright/test'


export default defineConfig({
    testDir: './test',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: 'html',
    use: {
        baseURL: 'http://localhost:1997',
    },

    webServer: {
        command: 'pnpm dev:test',
        url: 'http://localhost:1997',
        reuseExistingServer: !process.env.CI,
    },

    // projects: [
    //     {
    //         name: 'chromium',
    //         use: { ...devices['Desktop Chrome'] },
    //     },
    //
    //     {
    //         name: 'firefox',
    //         use: { ...devices['Desktop Firefox'] },
    //     },
    //
    //     {
    //         name: 'webkit',
    //         use: { ...devices['Desktop Safari'] },
    //     },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
    //],


})
