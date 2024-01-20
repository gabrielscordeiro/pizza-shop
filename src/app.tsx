import './global.css'

import { QueryClientProvider } from '@tanstack/react-query'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { ThemeProvider } from '@/components/theme/theme-provider.tsx'
import { Toaster } from '@/components/ui/sonner'
import { queryClient } from '@/lib/react-query.ts'
import { router } from '@/routes'

export function App() {
    return (
        <HelmetProvider>
            <ThemeProvider storageKey="pizza-shop-theme" defaultTheme="dark" >
                <Helmet titleTemplate="%s | pizza.shop"/>
                <Toaster richColors />
                <QueryClientProvider client={queryClient}>
                    <RouterProvider router={router} />
                </QueryClientProvider>
            </ThemeProvider>
        </HelmetProvider>
    )
}
 