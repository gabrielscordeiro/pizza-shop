import { Building, ChevronDown, LogOut } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

export function AccountMenu() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2 select-none">
                    Pizza Shop
                    <ChevronDown />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="flex flex-col">
                    <span>Gabriel S. Cordeiro</span>
                    <span className="text-sm font-normal text-muted-foreground">gabrielcordeiro.dev@gmail.com</span>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                <DropdownMenuItem className="cursor-pointer">
                    <Building className="w-4 h-4 mr-2" />
                    <span>Store profile</span>
                </DropdownMenuItem>

                <DropdownMenuItem className="cursor-pointer text-rose-500  dark:text-rose-400">
                    <LogOut className="w-4 h-4 mr-2" />
                    <span>Logout</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}