import { Utensils } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.tsx'

export function DayOrdersAmountCard() {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base font-semibold">Orders (daily)</CardTitle>
                <Utensils className="size-4 text-muted-foreground" />
            </CardHeader>

            <CardContent className="space-y-1">
                <span className="text-2xl font-bold tracking-tight">12</span>
                <p className="text-xs text-muted-foreground">
                    <span className="text-rose-500 dark:text-rose-400">-4%</span> compared to yesterday
                </p>
            </CardContent>
        </Card>
    )
}