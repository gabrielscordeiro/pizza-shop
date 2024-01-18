import { createBrowserRouter } from 'react-router-dom'

import { AuthLayout } from '@/pages/_layouts/auth'
import { PainelLayout } from '@/pages/_layouts/painel'
import { Dashboard } from '@/pages/app/dashboard/dashboard.tsx'
import { Orders } from '@/pages/app/orders/orders.tsx'
import { SignIn } from '@/pages/auth/sign-in'
import { SignUp } from '@/pages/auth/sing-up'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <PainelLayout />,
        children: [
            { path: '/', element: <Dashboard /> },
            { path: '/orders', element: <Orders /> },
        ]
    },

    {
        path: '/',
        element: <AuthLayout />,
        children: [
            { path: '/sign-in', element: <SignIn /> },
            { path: '/sign-up', element: <SignUp /> },
        ]
    },
])