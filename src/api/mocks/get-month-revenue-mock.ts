import { http, HttpResponse } from 'msw'

import { GetMonthRevenueOrdersAmountResponse } from '@/api/get-month-revenue'

export  const getMonthRevenueMock = http.get<never, never, GetMonthRevenueOrdersAmountResponse>('/metrics/month-receipt', () => {
    return HttpResponse.json({
        receipt: 20000,
        diffFromLastMonth: 10
    })
})