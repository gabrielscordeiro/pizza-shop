import { zodResolver } from '@hookform/resolvers/zod'
import { useQuery } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { getManagedRestaurant } from '@/api/get-managed-restaurant.ts'
import { Button } from '@/components/ui/button'
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const storeProfileSchema = z.object({
    name: z.string().min(1),
    description: z.string()
})

type StoreProfileSchemaType = z.infer<typeof storeProfileSchema>

export function StoreProfileDialog() {
    const { data: managedRestaurant} = useQuery({
        queryKey: ['managed-restaurant'],
        queryFn: getManagedRestaurant
    })

    const {
        register,
        handleSubmit
    } = useForm<StoreProfileSchemaType>({
        resolver: zodResolver(storeProfileSchema),
        values: {
            name: managedRestaurant?.name ?? '',
            description: managedRestaurant?.description ?? ''
        }
    })
    
    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Store profile</DialogTitle>
                <DialogDescription>
                    Update your store information
                </DialogDescription>
            </DialogHeader>

            <form>
                <div className="space-y-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right" htmlFor="name">
                            Name
                        </Label>
                        <Input
                            className="col-span-3"
                            id="name"
                            {...register('name')}
                        />
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right" htmlFor="description">
                            Description
                        </Label>
                        <Textarea
                            className="col-span-3"
                            id="description"
                            {...register('description')}
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="button" variant="ghost">Cancel</Button>
                    <Button type="submit" variant="success">Save</Button>
                </DialogFooter>
            </form>
        </DialogContent>
    )
}