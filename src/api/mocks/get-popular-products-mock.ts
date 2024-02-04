import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '@/api/get-popular-products'

export  const getPopularProductsMock = http.get<never, never, GetPopularProductsResponse>('/metrics/popular-products', () => {
    return HttpResponse.json([
        { product: 'Pizza 01', amount: 12 },
        { product: 'Pizza 02', amount: 0 },
        { product: 'Pizza 03', amount: 12 },
        { product: 'Pizza 04', amount: 54 },
        { product: 'Pizza 05', amount: 53 },
    ])
})