import { DollarSign } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.tsx'

export function MonthCanceledOrdersAmountCard() {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base font-semibold">Canceled (month)</CardTitle>
                <DollarSign className="size-4 text-muted-foreground" />
            </CardHeader>

            <CardContent className="space-y-1">
                <span className="text-2xl font-bold tracking-tight">32</span>
                <p className="text-xs text-muted-foreground">
                    <span className="text-emerald-500 dark:text-emerald-400">-2%</span> compared to last month
                </p>
            </CardContent>
        </Card>
    )
}