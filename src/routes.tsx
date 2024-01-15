import { createBrowserRouter } from 'react-router-dom'

import { AuthLayout } from '@/pages/_layouts/auth'
import { PainelLayout } from '@/pages/_layouts/painel'
import { Dashboard } from '@/pages/app/dashboard'
import { SignIn } from '@/pages/auth/sign-in'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <PainelLayout />,
        children: [
            { path: '/', element: <Dashboard /> },
        ]
    },

    {
        path: '/',
        element: <AuthLayout />,
        children: [
            { path: '/sign-in', element: <SignIn /> },
        ]
    },
])