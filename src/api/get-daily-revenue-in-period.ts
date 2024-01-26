import { api } from '@/lib/axios.ts'

export type GetDailyRevenueInPeriodResponse =  {
    date: string
    receipt: number
}[]

export async function getDailyRevenueInPeriod() {
    const response = await api.get<GetDailyRevenueInPeriodResponse>('/metrics/daily-receipt-in-period')

    return response.data
}