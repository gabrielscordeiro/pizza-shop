import { useQuery } from '@tanstack/react-query'
import { BarChart, Loader2 } from 'lucide-react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import colors from 'tailwindcss/colors'

import { getPopularProducts } from '@/api/get-popular-products.ts'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.tsx'

const COLORS = [
    colors.sky[500],
    colors.amber[500],
    colors.violet[500],
    colors.emerald[500],
    colors.rose[500],
]

export function PopularProductsChart() {
    const { data: popularProducts } = useQuery({
        queryFn: getPopularProducts,
        queryKey: ['metrics', 'popular-products']
    })

    return (
        <Card className="col-span-3">
            <CardHeader className="pb-8">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-base font-medium">Popular products</CardTitle>
                    <BarChart className="size-4 text-muted-foreground"/>
                </div>
            </CardHeader>

            <CardContent>
                {popularProducts ? (

                    <ResponsiveContainer width="100%" height={240}>
                        <PieChart style={{ fontSize: 12 }}>
                            <Pie
                                data={popularProducts}
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
                                            {popularProducts[index].product.length > 12
                                                ? popularProducts[index].product.substring(0, 12).concat('...')
                                                : popularProducts[index].product}{' '}
                                        ({value})
                                        </text>
                                    )
                                }}
                            >
                                {popularProducts.map((_, index) => (
                                    <Cell
                                        key={`cel-${index}`}
                                        fill={COLORS[index]}
                                        className="stroke-background hover:opacity-60"
                                    />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                ) : (
                    <div className="flex h-[240px] w-full items-center justify-center">
                        <Loader2 className="size-8 animate-spin text-muted-foreground" />
                    </div>
                )}
            </CardContent>
        </Card>

    )
}
