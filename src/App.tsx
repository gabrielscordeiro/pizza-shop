import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { ThemeProvider } from '@/components/theme/theme-provider.tsx'
import { Toaster } from '@/components/ui/sonner'
import { router } from '@/routes'

export function App() {
    return (
        <HelmetProvider>
            <ThemeProvider storageKey="pizza-shop-theme" defaultTheme="dark" >
                <Helmet titleTemplate="%s | pizza.shop"/>
                <Toaster richColors />
                <RouterProvider router={router} />
            </ThemeProvider>
        </HelmetProvider>
    )
}
 