import { useQuery } from '@tanstack/react-query'
import { Utensils } from 'lucide-react'

import { getDayOrdersAmount } from '@/api/get-day-orders-amount.ts'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.tsx'
import { MetricCardSkeleton } from '@/pages/app/dashboard/metric-card-skeleton.tsx'

export function DayOrdersAmountCard() {
    const { data: dayOrdersAmount } = useQuery({
        queryFn: getDayOrdersAmount,
        queryKey: ['metrics','day-orders-amount']
    })

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base font-semibold">Orders (daily)</CardTitle>
                <Utensils className="size-4 text-muted-foreground" />
            </CardHeader>

            <CardContent className="space-y-1">
                {dayOrdersAmount ? (
                    <>
                        <span className="text-2xl font-bold tracking-tight">{dayOrdersAmount.amount.toLocaleString('en-US')}</span>
                        <p className="text-xs text-muted-foreground">
                            {dayOrdersAmount.diffFromYesterday >= 0 ? (
                                <span className="text-emerald-500 dark:text-emerald-400">+{dayOrdersAmount.diffFromYesterday}%</span>
                            ): (
                                <span className="text-rose-500 dark:text-rose-400">-{dayOrdersAmount.diffFromYesterday}%</span>
                            )}
                            {' '} compared to yesterday
                        </p>
                    </>
                ) : (
                    <MetricCardSkeleton />
                )}
            </CardContent>
        </Card>
    )
}