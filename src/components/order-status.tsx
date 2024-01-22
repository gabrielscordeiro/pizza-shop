type OrderStatus = 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'

interface OrderStatusProps {
    status: OrderStatus
}

const orderStatusMap: Record<OrderStatus, string> = {
    pending: 'Pending',
    canceled: 'Canceled',
    delivered: 'Delivered',
    delivering: 'Delivering',
    processing: 'Processing'
}

export function OrderStatus({ status }: OrderStatusProps) {
    return (
        <div className="flex items-center gap-2">
            {status === 'pending' && (
                <span className="size-2 rounded-full bg-slate-400"></span>
            )}

            {status === 'canceled' && (
                <span className="size-2 rounded-full bg-rose-500"></span>
            )}

            {status === 'delivered' && (
                <span className="size-2 rounded-full bg-emerald-500"></span>
            )}

            {['processing', 'delivering'].includes(status) && (
                <span className="size-2 rounded-full bg-amber-400"></span>
            )}

            <span className="font-medium text-muted-foreground">{orderStatusMap[status]}</span>
        </div>
    )
}