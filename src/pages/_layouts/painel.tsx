import { Outlet } from 'react-router-dom'

import { Header } from '@/components/header'

export function PainelLayout() {
    return (
        <div className="flex flex-col min-h-screen antialiased">
            <Header />

            <div className="flex flex-col flex-1 gap-4 p-8 pt-6">
                <Outlet />
            </div>
        </div>
    )
}