import { http, HttpResponse } from 'msw'

import { GetMonthCanceledOrdersAmountResponse } from '@/api/get-month-canceled-order-amount'

export  const getMonthCanceledOrdersAmountMock = http.get<never, never, GetMonthCanceledOrdersAmountResponse>('/metrics/month-canceled-orders-amount', () => {
    return HttpResponse.json({
        amount: 5,
        diffFromLastMonth: -5
    })
})