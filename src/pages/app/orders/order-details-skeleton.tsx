import { Skeleton } from '@/components/ui/skeleton.tsx'
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table.tsx'

export function OrderDetailsSkeleton() {
    return (
        <div className="space-y-6">
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell className="text-muted-foreground">Status</TableCell>

                        <TableCell className="flex justify-end">
                            <Skeleton className="h-5 w-20" />
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className="text-muted-foreground">Client</TableCell>

                        <TableCell className="flex justify-end">
                            <div className="flex items-center gap-2">
                                <Skeleton className="h-5 w-[164px]" />
                            </div>
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className="text-muted-foreground">Phone number</TableCell>

                        <TableCell className="flex justify-end">
                            <div className="flex items-center gap-2">
                                <Skeleton className="h-5 w-[140px]" />
                            </div>
                        </TableCell>
                    </TableRow>


                    <TableRow>
                        <TableCell className="text-muted-foreground">E-mail</TableCell>

                        <TableCell className="flex justify-end">
                            <div className="flex items-center gap-2">
                                <Skeleton className="h-5 w-[200px]" />
                            </div>
                        </TableCell>
                    </TableRow>


                    <TableRow>
                        <TableCell className="text-muted-foreground">Accomplished in</TableCell>

                        <TableCell className="flex justify-end">
                            <Skeleton className="h-5 w-[148px]" />
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
                    {Array.from({ length: 2 }).map((_, i) => (
                        <TableRow key={i}>
                            <TableCell>
                                <Skeleton className="h-5 w-[140px]" />
                            </TableCell>
                            <TableCell className="text-right">
                                <Skeleton className="ml-auto h-5 w-3" />
                            </TableCell>
                            <TableCell className="text-right">
                                <Skeleton className="ml-auto h-5 w-12" />
                            </TableCell>
                            <TableCell className="text-right">
                                <Skeleton className="ml-auto h-5 w-12" />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>

                <TableFooter>
                    <TableCell colSpan={3}>Total order</TableCell>
                    <TableCell className="text-right font-medium">
                        <Skeleton className="h-5 w-20" />
                    </TableCell>
                </TableFooter>
            </Table>
        </div>
    )
}