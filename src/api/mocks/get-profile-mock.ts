import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '@/api/get-profile'


export  const getProfileMock = http.get<never, never, GetProfileResponse>('/me', () => {
    return HttpResponse.json({
        id: 'custom-user-id',
        name: 'John Doe',
        email: 'johndoe@example.com',
        phone: '(47) 99999-9999',
        role: 'manager',
        createdAt: new Date(),
        updatedAt: null
    })
})