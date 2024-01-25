import { useQuery } from '@tanstack/react-query'
import { formatDistanceToNow } from 'date-fns'
import { enUS } from 'date-fns/locale'

import { getOrderDetails } from '@/api/get-order-details.ts'
import { OrderStatus } from '@/components/order-status.tsx'
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table.tsx'
import { priceFormatter } from '@/lib/formatter.ts'

export interface OrderDetailsProps {
    orderId: string
    open: boolean
}

export function OrderDetails({ orderId, open }: OrderDetailsProps) {
    const { data: order } = useQuery({
        queryKey: ['order', orderId],
        queryFn: () => getOrderDetails({ orderId }),
        enabled: open
    })



    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Order: {orderId}</DialogTitle>
                <DialogDescription>
                    Order details
                </DialogDescription>
            </DialogHeader>

            {order && (
                <div className="space-y-6">
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell className="text-muted-foreground">Status</TableCell>

                                <TableCell className="flex justify-end">
                                    <OrderStatus status={order.status} />
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell className="text-muted-foreground">Client</TableCell>

                                <TableCell className="flex justify-end">
                                    <div className="flex items-center gap-2">
                                        {order.customer.name}
                                    </div>
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell className="text-muted-foreground">Phone number</TableCell>

                                <TableCell className="flex justify-end">
                                    <div className="flex items-center gap-2">
                                        {order.customer.phone ?? 'Not informed'}
                                    </div>
                                </TableCell>
                            </TableRow>


                            <TableRow>
                                <TableCell className="text-muted-foreground">E-mail</TableCell>

                                <TableCell className="flex justify-end">
                                    <div className="flex items-center gap-2">
                                        {order.customer.email}
                                    </div>
                                </TableCell>
                            </TableRow>


                            <TableRow>
                                <TableCell className="text-muted-foreground">Accomplished in</TableCell>

                                <TableCell className="flex justify-end">
                                    <div className="flex items-center gap-2">
                                        {formatDistanceToNow(order.createdAt, {
                                            locale: enUS,
                                            addSuffix: true
                                        })}
                                    </div>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>

                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Product</TableHead>
                                <TableHead className="text-right">Quantity</TableHead>
                                <TableHead className="text-right">Price</TableHead>
                                <TableHead className="text-right">Total</TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {order.orderItems.map(item => (
                                <TableRow key={item.id}>
                                    <TableCell>{item.product.name}</TableCell>
                                    <TableCell className="text-right">{item.quantity}</TableCell>
                                    <TableCell className="text-right">{priceFormatter.format(item.priceInCents / 100)}</TableCell>
                                    <TableCell className="text-right">{priceFormatter.format((item.priceInCents / 100) * item.quantity)}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>

                        <TableFooter>
                            <TableCell colSpan={3}>Total order</TableCell>
                            <TableCell className="text-right font-medium">{priceFormatter.format(order.totalInCents / 100)}</TableCell>
                        </TableFooter>
                    </Table>
                </div>
            )}
        </DialogContent>
    )
}