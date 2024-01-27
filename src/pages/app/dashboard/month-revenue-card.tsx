import { useQuery } from '@tanstack/react-query'
import { DollarSign } from 'lucide-react'

import { getMonthRevenueOrdersAmount } from '@/api/get-month-revenue.ts'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.tsx'
import { priceFormatter } from '@/lib/formatter.ts'
import { MetricCardSkeleton } from '@/pages/app/dashboard/metric-card-skeleton.tsx'

export function MonthRevenueCard() {

    const { data: monthRevenue } = useQuery({
        queryFn: getMonthRevenueOrdersAmount,
        queryKey: ['metrics','month-revenue']
    })

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base font-semibold">Total revenue (month)</CardTitle>
                <DollarSign className="size-4 text-muted-foreground" />
            </CardHeader>

            <CardContent className="space-y-1">
                {monthRevenue ? (
                    <>
                        <span className="text-2xl font-bold tracking-tight">{priceFormatter.format((monthRevenue.receipt / 100))}</span>
                        <p className="text-xs text-muted-foreground">
                            {monthRevenue.diffFromLastMonth >= 0 ? (
                                <span className="text-emerald-500 dark:text-emerald-400">+{monthRevenue.diffFromLastMonth}%</span>
                            ) : (
                                <span className="text-rose-500 dark:text-rose-400">{monthRevenue.diffFromLastMonth}% </span>
                            )}
                            {' '} compared to last month
                        </p>
                    </>
                ) : (
                    <MetricCardSkeleton />
                )}
            </CardContent>
        </Card>
    )
}