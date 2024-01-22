import { formatDistanceToNow } from 'date-fns'
import { enUS } from 'date-fns/locale'
import { ArrowRight, Search, X } from 'lucide-react'

import { OrderStatus } from '@/components/order-status.tsx'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'
import { priceFormatter } from '@/lib/formatter.ts'
import { OrderDetails } from '@/pages/app/orders/order-details'

interface OrderTableRowProps {
    order: {
        orderId: string
        createdAt: string
        status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
        customerName: string
        total: number
    }
}

export function OrderTableRow({ order }: OrderTableRowProps) {
    return (
        <TableRow>
            <TableCell>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline" size="xs">
                            <Search className="size-3" />
                            <span className="sr-only">Details of order</span>
                        </Button>
                    </DialogTrigger>

                    <OrderDetails />
                </Dialog>
            </TableCell>

            <TableCell className="font-mono text-sm font-medium">
                {order.orderId}
            </TableCell>

            <TableCell className="text-muted-foreground">
                {formatDistanceToNow(order.createdAt, {
                    locale: enUS,
                    addSuffix: true
                })}
            </TableCell>

            <TableCell>
                <OrderStatus status={order.status}/>
            </TableCell>

            <TableCell className="font-medium">
                {order.customerName}
            </TableCell>

            <TableCell className="font-medium">
                {priceFormatter.format(order.total)}
            </TableCell>

            <TableCell>
                <Button variant="outline" size="xs">
                    <ArrowRight className="mr-2 size-3" />
                    Approve
                </Button>
            </TableCell>

            <TableCell>
                <Button variant="ghost" size="xs">
                    <X className="mr-2 size-3" />
                    Cancel
                </Button>
            </TableCell>
        </TableRow>
    )
}