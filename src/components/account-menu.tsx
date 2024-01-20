import { useQuery } from '@tanstack/react-query'
import { Building, ChevronDown, LogOut } from 'lucide-react'

import { getManagedRestaurant } from '@/api/get-managed-restaurant.ts'
import { getProfile } from '@/api/get-profile.ts'
import { StoreProfileDialog } from '@/components/store-profile-dialog.tsx'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog.tsx'
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Skeleton } from '@/components/ui/skeleton.tsx'

export function AccountMenu() {

    const { data: profile, isLoading: isLoadingProfile} = useQuery({
        queryKey: ['profile'],
        queryFn: getProfile
    })

    const { data: managedRestaurant, isLoading: isLoadingManagedRestaurant} = useQuery({
        queryKey: ['managed-restaurant'],
        queryFn: getManagedRestaurant
    })

    return (
        <Dialog>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="flex select-none items-center gap-2">
                        {isLoadingManagedRestaurant ?  <Skeleton className="h-4 w-40" /> : managedRestaurant?.name}
                        <ChevronDown />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel className="flex flex-col">
                        {isLoadingProfile ? (
                            <div className="space-y-2.5">
                                <Skeleton className="h-4 w-32" />
                                <Skeleton className="h-3 w-24" />
                            </div>
                        ) :  (
                            <>
                                <span>{profile?.name}</span>
                                <span className="text-sm font-normal text-muted-foreground">{profile?.email}</span>
                            </>
                        )}
                    </DropdownMenuLabel>

                    <DropdownMenuSeparator />

                    <DialogTrigger asChild>
                        <DropdownMenuItem className="cursor-pointer">
                            <Building className="mr-2 size-4" />
                            <span>Store profile</span>
                        </DropdownMenuItem>
                    </DialogTrigger>

                    <DropdownMenuItem className="cursor-pointer text-rose-500  dark:text-rose-400">
                        <LogOut className="mr-2 size-4" />
                        <span>Logout</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <StoreProfileDialog />
        </Dialog>
    )
}