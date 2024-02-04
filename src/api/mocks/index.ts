import { setupWorker } from 'msw/browser'

import { getDailyRevenueInPeriodMock } from '@/api/mocks/get-daily-revenue-in-period-mock'
import { getDayOrdersAmountMock } from '@/api/mocks/get-day-orders-amount-mock'
import { getMonthCanceledOrdersAmountMock } from '@/api/mocks/get-month-canceled-orders-amount-mock'
import { getMonthOrdersAmountMock } from '@/api/mocks/get-month-orders-amount-mock'
import { getMonthRevenueMock } from '@/api/mocks/get-month-revenue-mock'
import { getPopularProductsMock } from '@/api/mocks/get-popular-products-mock'
import { registerRestaurantMock } from '@/api/mocks/register-restaurant-mock'
import { signInMock } from '@/api/mocks/sign-in-mock'
import { env } from '@/env'

export const worker = setupWorker(
    signInMock,
    registerRestaurantMock,
    getDayOrdersAmountMock,
    getMonthCanceledOrdersAmountMock,
    getMonthOrdersAmountMock,
    getMonthRevenueMock,
    getDayOrdersAmountMock,
    getPopularProductsMock,
    getDailyRevenueInPeriodMock
)

export async function enableMSW()  {

    if(env.MODE !== 'test') {
        return
    }

    await worker.start()
}