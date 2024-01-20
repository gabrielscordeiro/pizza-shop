import { api } from '@/lib/axios.ts'

export async function signOut() {
    await api.post('/sign-out')
}