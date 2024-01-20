import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { getManagedRestaurant } from '@/api/get-managed-restaurant.ts'
import { updateProfile } from '@/api/update-profile.ts'
import { Button } from '@/components/ui/button'
import {
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from '@/components/ui/dialog'
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
        queryFn: getManagedRestaurant,
        staleTime: Infinity
    })

    const {
        register,
        handleSubmit,
        formState: { isSubmitting }
    } = useForm<StoreProfileSchemaType>({
        resolver: zodResolver(storeProfileSchema),
        values: {
            name: managedRestaurant?.name ?? '',
            description: managedRestaurant?.description ?? ''
        }
    })

    const { mutateAsync: updateProfileFn } = useMutation({
        mutationFn: updateProfile
    })

    async function handleUpdateProfile(data: StoreProfileSchemaType) {
        try {
            await updateProfileFn({
                name: data.name,
                description: data.description
            })

            toast.success('Profile updated successfully!')
        } catch  {
            toast.error('Failed to update profile, please try again')
        }
    }
    
    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Store profile</DialogTitle>
                <DialogDescription>
                    Update your store information
                </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit(handleUpdateProfile)}>
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
                    <DialogClose asChild>
                        <Button
                            type="button"
                            variant="ghost"
                            disabled={isSubmitting}
                        >
                            Cancel
                        </Button>
                    </DialogClose>

                    <Button
                        type="submit"
                        variant="success"
                        disabled={isSubmitting}
                    >
                        Save
                    </Button>
                </DialogFooter>
            </form>
        </DialogContent>
    )
}