import { ArrowRight, Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'
import { OrderDetails } from '@/pages/app/orders/order-details'

export function OrderTableRow() {
    return (
        <TableRow>
            <TableCell>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline" size="xs">
                            <Search className="size-3" />
                            <span className="sr-only">Details of order</span>
                        </Button>
                    </DialogTrigger>

                    <OrderDetails />
                </Dialog>
            </TableCell>

            <TableCell className="font-mono text-sm font-medium">
                5feef13b-90fa-4798
            </TableCell>

            <TableCell className="text-muted-foreground">
                15 minutes ago
            </TableCell>

            <TableCell>
                <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-slate-400"></span>
                    <span className="font-medium text-muted-foreground">Pending</span>
                </div>
            </TableCell>

            <TableCell className="font-medium">
                Gabriel Schmidt Cordeiro
            </TableCell>

            <TableCell className="font-medium">
                US$ 100,00
            </TableCell>

            <TableCell>
                <Button variant="outline" size="xs">
                    <ArrowRight className="mr-2 size-3" />
                    Approve
                </Button>
            </TableCell>

            <TableCell>
                <Button variant="ghost" size="xs">
                    <X className="mr-2 size-3" />
                    Cancel
                </Button>
            </TableCell>
        </TableRow>
    )
}