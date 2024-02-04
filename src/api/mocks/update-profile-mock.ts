import { http, HttpResponse } from 'msw'

import { UpdateProfileBody } from '@/api/update-profile'

export const updateProfileMock = http.put<never, UpdateProfileBody>('/profile', async ({ request }) => {
    const { name } = await request.json()

    if(name === 'Pizza Shop') {
        return new HttpResponse(null, { status: 204 })
    }

    return new HttpResponse(null, { status: 400 })
})