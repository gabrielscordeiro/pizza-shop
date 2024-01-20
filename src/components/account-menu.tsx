import { useQuery } from '@tanstack/react-query'
import { Building, ChevronDown, LogOut } from 'lucide-react'

import { getManagedRestaurant } from '@/api/get-managed-restaurant.ts'
import { getProfile } from '@/api/get-profile.ts'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

export function AccountMenu() {

    const { data: profile} = useQuery({
        queryKey: ['profile'],
        queryFn: getProfile
    })

    const { data: managedRestaurant} = useQuery({
        queryKey: ['managed-restaurant'],
        queryFn: getManagedRestaurant
    })

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex select-none items-center gap-2">
                    {managedRestaurant?.name}
                    <ChevronDown />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="flex flex-col">
                    <span>{profile?.name}</span>
                    <span className="text-sm font-normal text-muted-foreground">{profile?.email}</span>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                <DropdownMenuItem className="cursor-pointer">
                    <Building className="mr-2 size-4" />
                    <span>Store profile</span>
                </DropdownMenuItem>

                <DropdownMenuItem className="cursor-pointer text-rose-500  dark:text-rose-400">
                    <LogOut className="mr-2 size-4" />
                    <span>Logout</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}