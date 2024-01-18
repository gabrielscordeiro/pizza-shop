import { Helmet } from 'react-helmet-async'

import { DayOrdersAmountCard } from '@/pages/app/dashboard/day-orders-amount-card.tsx'
import { MonthCanceledOrdersAmountCard } from '@/pages/app/dashboard/month-canceled-orders-amount-card.tsx'
import { MonthOrdersAmountCard } from '@/pages/app/dashboard/month-orders-amount-card.tsx'
import { MonthRevenueCard } from '@/pages/app/dashboard/month-revenue-card.tsx'
import { PopularProductsChart } from '@/pages/app/dashboard/popular-products-chart.tsx'
import { RevenueChart } from '@/pages/app/dashboard/revenue-chart.tsx'

export function Dashboard() {
    return (
        <>
            <Helmet title="Dashboard" />
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold tracking-tight">
                    Dashboard
                </h1>

                <div className="grid grid-cols-4 gap-4">
                    <MonthRevenueCard />
                    <MonthOrdersAmountCard />
                    <DayOrdersAmountCard />
                    <MonthCanceledOrdersAmountCard />
                </div>

                <div className="grid grid-cols-9 gap-4">
                    <RevenueChart />
                    <PopularProductsChart />
                </div>
            </div>
        </>
    )
}