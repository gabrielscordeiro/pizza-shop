import { createBrowserRouter } from 'react-router-dom'

import { AuthLayout } from '@/pages/_layouts/auth'
import { PainelLayout } from '@/pages/_layouts/painel'
import { NotFound } from '@/pages/404.tsx'
import { Dashboard } from '@/pages/app/dashboard/dashboard.tsx'
import { Orders } from '@/pages/app/orders/orders.tsx'
import { SignIn } from '@/pages/auth/sign-in'
import { SignUp } from '@/pages/auth/sing-up'
import { Error } from '@/pages/error.tsx'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <PainelLayout />,
        errorElement: <Error />,
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
    {
        path: '*',
        element: <NotFound />
    }
])