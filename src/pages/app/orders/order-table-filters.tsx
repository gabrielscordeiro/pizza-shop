import { zodResolver } from '@hookform/resolvers/zod'
import { Search, X } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'

import { Button } from '@/components/ui/button.tsx'
import { Input } from '@/components/ui/input.tsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const orderFiltersSchema = z.object({
    orderId: z.string().optional(),
    customerName: z.string().optional(),
    status: z.string().optional(),
})

type OrderFiltersSchemaType = z.infer<typeof orderFiltersSchema>

export function OrderTableFilters() {
    const [searchParams, setSearchParams] = useSearchParams()

    const orderId = searchParams.get('orderId')
    const customerName = searchParams.get('customerName')
    const status = searchParams.get('status')


    const {
        register,
        handleSubmit,
        control,
        reset
    } = useForm<OrderFiltersSchemaType>({
        resolver: zodResolver(orderFiltersSchema),
        defaultValues: {
            orderId: orderId ?? '',
            customerName: customerName ?? '',
            status: status ?? 'all'
        }
    })

    function handleFilter({ orderId, customerName, status }: OrderFiltersSchemaType) {
        setSearchParams(state => {
            if(orderId) {
                state.set('orderId', orderId)
            } else {
                state.delete('orderId')
            }

            if(customerName) {
                state.set('customerName', customerName)
            } else {
                state.delete('customerName')
            }

            if(status) {
                state.set('status', status)
            } else {
                state.delete('status')
            }

            state.set('page', '1')

            return state
        })
    }


    function handleClearFilters() {
        setSearchParams(state => {
            state.delete('orderId')
            state.delete('customerName')
            state.delete('status')

            state.set('page', '1')

            return state
        })

        reset({
            orderId: '',
            customerName: '',
            status: 'all'
        })
    }

    return (
        <form onSubmit={handleSubmit(handleFilter)} className="flex items-center gap-2">
            <span className="text-sm font-semibold">Filters:</span>
            <Input
                placeholder="Order ID"
                className="h-8 w-auto"
                {...register('orderId')}
            />

            <Input
                placeholder="Customer name"
                className="h-8 w-[320px]"
                {...register('customerName')}
            />

            <Controller
                name="status"
                control={control}
                render={({ field: { name, onChange, value, disabled } }) => (
                    <Select
                        defaultValue="all"
                        name={name}
                        onValueChange={onChange}
                        value={value}
                        disabled={disabled}
                    >
                        <SelectTrigger className="h-8 w-[180px]">
                            <SelectValue />
                        </SelectTrigger>

                        <SelectContent>
                            <SelectItem value="all">All status</SelectItem>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="canceled">Canceled</SelectItem>
                            <SelectItem value="processing">Processing</SelectItem>
                            <SelectItem value="delivering">Delivering</SelectItem>
                            <SelectItem value="delivered">Delivered</SelectItem>
                        </SelectContent>
                    </Select>
                )}
            />




            <Button type="submit" variant="secondary" size="xs">
                <Search className="mr-2 size-4" />
                Filter results
            </Button>


            <Button onClick={handleClearFilters} type="button" variant="outline" size="xs">
                <X className="mr-2 size-4" />
                Remove filters
            </Button>
        </form>
    )
}