import { api } from '@/lib/axios.ts'

export type GetPopularProductsResponse = {
    product: string
    amount: number
}[]

export async function getPopularProducts() {
    const response = await api.get<GetPopularProductsResponse>('/metrics/popular-products')

    return response.data
}