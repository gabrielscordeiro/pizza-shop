import { api } from '@/lib/axios.ts'

export interface UpdateProfileBody {
    name: string
    description: string | null
}
export async function updateProfile({ name, description }: UpdateProfileBody) {
    await api.put('/profile',{
        name,
        description
    })
}