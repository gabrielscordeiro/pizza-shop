import { useQuery } from '@tanstack/react-query'
import { DollarSign } from 'lucide-react'

import { getMonthCanceledOrdersAmount } from '@/api/get-month-canceled-order-amount.ts'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.tsx'

export function MonthCanceledOrdersAmountCard() {
    const { data: monthCanceledOrdersAmount } = useQuery({
        queryFn: getMonthCanceledOrdersAmount,
        queryKey: ['metrics','month-canceled-orders-amount']
    })

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base font-semibold">Canceled (month)</CardTitle>
                <DollarSign className="size-4 text-muted-foreground" />
            </CardHeader>

            <CardContent className="space-y-1">
                {monthCanceledOrdersAmount && (
                    <>
                        <span className="text-2xl font-bold tracking-tight">{monthCanceledOrdersAmount.amount.toLocaleString('en-US')}</span>
                        <p className="text-xs text-muted-foreground">
                            {monthCanceledOrdersAmount.diffFromLastMonth < 0 ? (
                                <span className="text-emerald-500 dark:text-emerald-400">{monthCanceledOrdersAmount.diffFromLastMonth}%</span>
                            ) : (
                                <span className="text-rose-500 dark:text-rose-400">+{monthCanceledOrdersAmount.diffFromLastMonth}% </span>
                            )}
                            {' '}compared to last month
                        </p>
                    </>
                )}
            </CardContent>
        </Card>
    )
}