import { BarChart } from 'lucide-react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import colors from 'tailwindcss/colors'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.tsx'


const data = [
    { product: 'Pepperoni', amount: 40 },
    { product: 'Meat', amount: 30 },
    { product: 'Margherita ', amount: 50 },
    { product: 'Hawaiian', amount: 16 },
    { product: 'BBQ Chicken', amount: 26 },
]

const COLORS = [
    colors.sky[500],
    colors.amber[500],
    colors.violet[500],
    colors.emerald[500],
    colors.rose[500],
]

export function PopularProductsChart() {
    return (
        <Card className="col-span-3">
            <CardHeader className="pb-8">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-base font-medium">Popular products</CardTitle>
                    <BarChart className="size-4 text-muted-foreground"/>
                </div>
            </CardHeader>

            <CardContent>
                <ResponsiveContainer width="100%" height={240}>
                    <PieChart style={{ fontSize: 12 }}>
                        <Pie
                            data={data}
                            dataKey="amount"
                            nameKey="product"
                            cx="50%"
                            cy="50%"
                            outerRadius={86}
                            innerRadius={64}
                            strokeWidth={8}
                            label={({
                                cx,
                                cy,
                                midAngle,
                                innerRadius,
                                outerRadius,
                                value,
                                index,
                            }) => {
                                const RADIAN = Math.PI / 180
                                const radius = 30 + innerRadius + (outerRadius - innerRadius)
                                const x = cx + radius * Math.cos(-midAngle * RADIAN)
                                const y = cy + radius * Math.sin(-midAngle * RADIAN)

                                return (
                                    <text
                                        x={x}
                                        y={y}
                                        className="fill-muted-foreground text-xs"
                                        textAnchor={x > cx ? 'start' : 'end'}
                                        dominantBaseline="central"
                                    >
                                        {data[index].product.length > 12
                                            ? data[index].product.substring(0, 12).concat('...')
                                            : data[index].product}{' '}
                                        ({value})
                                    </text>
                                )
                            }}
                        >
                            {data.map((_, index) => (
                                <Cell
                                    key={`cel-${index}`}
                                    fill={COLORS[index]}
                                    className="stroke-background hover:opacity-60"
                                />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>

    )
}