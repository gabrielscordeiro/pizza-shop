import { Pizza } from 'lucide-react'
import { Outlet } from 'react-router-dom'

export function AuthLayout() {
    return (
        <div className="grid grid-cols-2 min-h-screen antialiased">
            <div className="h-full border-r border-foreground/5 bg-muted p-10 text-muted-foreground flex flex-col justify-between">
                <div className="flex items-center gap-3 text-lg text-foreground">
                    <Pizza className="h-5 w-5"/>
                    <span className="font-semibold">pizza.shop</span>
                </div>
                <footer className="text-sm">
                    Partner Dashboard &copy; pizza.shop - {new Date().getFullYear()}
                </footer>
            </div>

            <div className="flex flex-col items-center justify-center relative">
                <Outlet />
            </div>
        </div>
    )
}