import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import colors from 'tailwindcss/colors'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { priceFormatter } from '@/lib/formatter.ts'


const data = [
    { date: '10/12', revenue: 543 },
    { date: '11/12', revenue: 900 },
    { date: '12/12', revenue: 773 },
    { date: '13/12', revenue: 949 },
    { date: '14/12', revenue: 673 },
    { date: '15/12', revenue: 500 },
    { date: '16/12', revenue: 993 },
    { date: '17/12', revenue: 480 },
]

export  function RevenueChart() {
    return (
        <Card className="col-span-6">
            <CardHeader className="flex-row items-center justify-between pb-8">
                <div className="space-y-1">
                    <CardTitle className="text-base font-medium">Revenue in the period</CardTitle>
                    <CardDescription>Daily revenue in the period</CardDescription>
                </div>
            </CardHeader>

            <CardContent>
                <ResponsiveContainer width="100%" height={240}>
                    <LineChart data={data} style={{ fontSize: 12}}>
                        <XAxis
                            dataKey="date"
                            axisLine={false}
                            tickLine={false}
                            dy={16}
                        />
                        <YAxis
                            stroke="#888"
                            axisLine={false}
                            tickLine={false}
                            tickFormatter={ (value:number) => priceFormatter.format(value) }
                            width={88}
                            tickMargin={10}
                        />

                        <CartesianGrid
                            vertical={false}
                            className="stroke-muted"
                        />

                        <Line
                            type="linear"
                            strokeWidth={2}
                            dataKey="revenue"
                            stroke={colors.violet['500']}
                        />


                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>

    )
}