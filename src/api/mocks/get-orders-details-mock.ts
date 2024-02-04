import { http, HttpResponse } from 'msw'

import { GetOrderDetailsParams, GetOrderDetailsResponse } from '@/api/get-order-details'


export  const getOrdersDetailsMock = http.get<GetOrderDetailsParams, never, GetOrderDetailsResponse>('/orders/:orderId', ({ params }) => {
    return HttpResponse.json({
        id: params.orderId,
        customer: {
            name: 'John Doe',
            email: 'johndoe@example.com',
            phone: '47 99999-9999'
        },
        status: 'pending',
        createdAt: new Date().toDateString(),
        totalInCents: 5000,
        orderItems: [
            {
                id: 'order-item-1',
                priceInCents: 1000,
                product: { name: 'Pizza 01' },
                quantity: 1
            },
            {
                id: 'order-item-2',
                priceInCents: 2000,
                product: { name: 'Pizza 02' },
                quantity: 2
            },
        ]
    })
})