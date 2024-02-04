import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '@/api/get-daily-revenue-in-period'

export  const getDailyRevenueInPeriodMock = http.get<never, never, GetDailyRevenueInPeriodResponse>('/metrics/daily-receipt-in-period', () => {
    return HttpResponse.json([
        { date: '01/01/2024', receipt: 2000 },
        { date: '02/01/2024', receipt: 400 },
        { date: '03/01/2024', receipt: 484 },
        { date: '04/01/2024', receipt: 501 },
        { date: '05/01/2024', receipt: 2154 },
        { date: '06/01/2024', receipt: 150 },
        { date: '07/01/2024', receipt: 5000 },
        { date: '08/01/2024', receipt: 450 },
        { date: '09/01/2024', receipt: 104 },
    ])
})