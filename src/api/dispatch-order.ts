import { api } from '@/lib/axios.ts'

export interface DispatchOrderParams {
    orderId: string
}


export async function dispatchOrder({ orderId }: DispatchOrderParams) {
    await api.patch(`/orders/${orderId}/dispatch`)

}