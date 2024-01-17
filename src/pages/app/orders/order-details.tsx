import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table.tsx'

export function OrderDetails() {
    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Order: 5feef13b-90fa-4798</DialogTitle>
                <DialogDescription>
                    Order details
                </DialogDescription>
            </DialogHeader>

            <div className="space-y-6">
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell className="text-muted-foreground">Status</TableCell>

                            <TableCell className="flex justify-end">
                                <div className="flex items-center gap-2">
                                    <span className="size-2 rounded-full bg-slate-400"></span>
                                    <span className="font-medium text-muted-foreground">Pending</span>
                                </div>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="text-muted-foreground">Client</TableCell>

                            <TableCell className="flex justify-end">
                                <div className="flex items-center gap-2">
                                    Gabriel Schmidt Cordeiro
                                </div>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="text-muted-foreground">Phone number</TableCell>

                            <TableCell className="flex justify-end">
                                <div className="flex items-center gap-2">
                                    (47) 99998-9999
                                </div>
                            </TableCell>
                        </TableRow>


                        <TableRow>
                            <TableCell className="text-muted-foreground">E-mail</TableCell>

                            <TableCell className="flex justify-end">
                                <div className="flex items-center gap-2">
                                    gabrielcordeiro.dev@gmail.com
                                </div>
                            </TableCell>
                        </TableRow>


                        <TableRow>
                            <TableCell className="text-muted-foreground">Accomplished in</TableCell>

                            <TableCell className="flex justify-end">
                                <div className="flex items-center gap-2">
                                    15 minutes ago
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Product</TableHead>
                            <TableHead className="text-right">Quantity</TableHead>
                            <TableHead className="text-right">Price</TableHead>
                            <TableHead className="text-right">Total</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        <TableRow>
                            <TableCell>Pizza Pepperoni</TableCell>
                            <TableCell className="text-right">2</TableCell>
                            <TableCell className="text-right">US$ 19,90</TableCell>
                            <TableCell className="text-right">US$ 39,80</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Pizza Margherita</TableCell>
                            <TableCell className="text-right">1</TableCell>
                            <TableCell className="text-right">US$ 16,00</TableCell>
                            <TableCell className="text-right">US$ 16,00</TableCell>
                        </TableRow>
                    </TableBody>

                    <TableFooter>
                        <TableCell colSpan={3}>Total order</TableCell>
                        <TableCell className="text-right font-medium">US$ 55,80</TableCell>
                    </TableFooter>
                </Table>
            </div>
        </DialogContent>
    )
}