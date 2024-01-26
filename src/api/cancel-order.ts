import { api } from '@/lib/axios.ts'

export interface CancelOrderParams {
    orderId: string
}


export async function cancelOrder({ orderId }: CancelOrderParams) {
    await api.patch(`/orders/${orderId}/cancel`)

}