import { useMutation, useQueryClient } from '@tanstack/react-query'
import { formatDistanceToNow } from 'date-fns'
import { enUS } from 'date-fns/locale'
import { ArrowRight, Search, X } from 'lucide-react'
import { useState } from 'react'

import { approveOrder } from '@/api/approve-order.ts'
import { cancelOrder } from '@/api/cancel-order.ts'
import { deliverOrder } from '@/api/derliver-order.ts'
import { dispatchOrder } from '@/api/dispatch-order.ts'
import { GetOrdersResponse } from '@/api/ger-orders.ts'
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
    const [isDetailsOpen, setIsDetailsOpen] = useState(false)
    const queryClient = useQueryClient()

    function updateOrderStatusOnCache(orderId: string, status: OrderStatus) {
        const ordersListCache = queryClient.getQueriesData<GetOrdersResponse>({
            queryKey: ['orders']
        })

        ordersListCache.forEach(([cacheKey, cacheData]) => {
            if(!cacheData) return

            queryClient.setQueryData<GetOrdersResponse>(cacheKey, {
                ...cacheData,
                orders: cacheData.orders.map(order => {
                    if(order.orderId === orderId) {
                        return {...order, status }
                    }

                    return order
                })
            })
        })
    }

    const { mutateAsync: approveOrderFn, isPending: isApprovingOrder } = useMutation({
        mutationFn: approveOrder,
        async onSuccess(_, { orderId }) {
            updateOrderStatusOnCache(orderId, 'processing')
        }
    })

    const { mutateAsync: dispatchOrderFn, isPending: isDispatchingOrder } = useMutation({
        mutationFn: dispatchOrder,
        async onSuccess(_, { orderId }) {
            updateOrderStatusOnCache(orderId, 'delivering')
        }
    })

    const { mutateAsync: deliverOrderFn, isPending: isDeliveringOrder } = useMutation({
        mutationFn: deliverOrder,
        async onSuccess(_, { orderId }) {
            updateOrderStatusOnCache(orderId, 'delivered')
        }
    })


    const { mutateAsync: cancelOrderFn, isPending: isCancelingOrder } = useMutation({
        mutationFn: cancelOrder,
        async onSuccess(_, { orderId }) {
            updateOrderStatusOnCache(orderId, 'canceled')
        }
    })

    return (
        <TableRow>
            <TableCell>
                <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
                    <DialogTrigger asChild>
                        <Button variant="outline" size="xs">
                            <Search className="size-3" />
                            <span className="sr-only">Details of order</span>
                        </Button>
                    </DialogTrigger>

                    <OrderDetails orderId={order.orderId} open={isDetailsOpen}/>
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
                {priceFormatter.format(order.total / 100)}
            </TableCell>

            {order.status === 'pending' && (
                <TableCell>
                    <Button
                        onClick={() => approveOrderFn({ orderId: order.orderId })}
                        disabled={isApprovingOrder}
                        variant="outline"
                        size="xs"
                    >
                        <ArrowRight className="mr-2 size-3" />
                        Approve
                    </Button>
                </TableCell>
            )}

            {order.status === 'processing' && (
                <TableCell>
                    <Button
                        onClick={() => dispatchOrderFn({ orderId: order.orderId })}
                        disabled={isDispatchingOrder}
                        variant="outline"
                        size="xs"
                    >
                        <ArrowRight className="mr-2 size-3" />
                        Dispatching
                    </Button>
                </TableCell>
            )}


            {order.status === 'delivering' && (
                <TableCell>
                    <Button
                        onClick={() => deliverOrderFn({ orderId: order.orderId })}
                        disabled={isDeliveringOrder}
                        variant="outline"
                        size="xs"
                    >
                        <ArrowRight className="mr-2 size-3" />
                        Delivered
                    </Button>
                </TableCell>
            )}


            <TableCell>
                <Button
                    disabled={!['pending', 'processing'].includes(order.status) || isCancelingOrder}
                    onClick={() => cancelOrderFn({ orderId: order.orderId })}
                    variant="ghost"
                    size="xs"
                >
                    <X className="mr-2 size-3" />
                    Cancel
                </Button>
            </TableCell>
        </TableRow>
    )
}