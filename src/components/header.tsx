import { Home, Pizza, UtensilsCrossed } from 'lucide-react'

import { AccountMenu } from '@/components/account-menu.tsx'
import { NavLink } from '@/components/nav-link'
import { ThemeToggle } from '@/components/theme/theme-toggle.tsx'
import { Separator } from '@/components/ui/separator'

export function Header() {
    return (
        <div className="border-b">
            <div className="flex items-center h-16 gap-6 px-6">
                <Pizza className="w-6 h-6" />

                <Separator orientation="vertical" className="h-6" />

                <nav className="flex items-center space-x-4 lg:space-x-6">
                    <NavLink to={'/'}>
                        <Home className="w-4 h-4" />
                        Dashboard
                    </NavLink>

                    <NavLink to={'/orders'}>
                        <UtensilsCrossed className="w-4 h-4" />
                        Orders
                    </NavLink>
                </nav>

                <div className="ml-auto flex items-center gap-2">
                    <ThemeToggle />
                    <AccountMenu />
                </div>
            </div>
        </div>
    )
}