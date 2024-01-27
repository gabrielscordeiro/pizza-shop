import { useQuery } from '@tanstack/react-query'
import { Utensils } from 'lucide-react'

import { getMonthOrdersAmount } from '@/api/get-month-orders-amout.ts'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.tsx'
import { MetricCardSkeleton } from '@/pages/app/dashboard/metric-card-skeleton.tsx'

export function MonthOrdersAmountCard() {
    const { data: monthOrdersAmount } = useQuery({
        queryFn: getMonthOrdersAmount,
        queryKey: ['metrics','month-orders-amount']
    })
    
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base font-semibold">Orders (month)</CardTitle>
                <Utensils className="size-4 text-muted-foreground" />
            </CardHeader>

            <CardContent className="space-y-1">
                {monthOrdersAmount ? (
                    <>
                        <span className="text-2xl font-bold tracking-tight">{monthOrdersAmount.amount.toLocaleString('en-US')}</span>
                        <p className="text-xs text-muted-foreground">
                            {monthOrdersAmount.diffFromLastMonth >= 0 ? (
                                <span className="text-emerald-500 dark:text-emerald-400">{monthOrdersAmount.diffFromLastMonth}%</span>
                            ): (
                                <span className="text-rose-500 dark:text-rose-400">{monthOrdersAmount.diffFromLastMonth}%</span>
                            )}
                            {' '}compared to last month
                        </p>
                    </>
                ) : (
                    <MetricCardSkeleton />
                )}
            </CardContent>
        </Card>
    )
}