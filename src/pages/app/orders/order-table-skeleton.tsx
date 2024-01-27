import { Search } from 'lucide-react'

import { Button } from '@/components/ui/button.tsx'
import { Skeleton } from '@/components/ui/skeleton.tsx'
import { TableCell, TableRow } from '@/components/ui/table.tsx'

export function OrderTableSkeleton() {
    return Array.from({ length: 10 }).map((_, i) => (
        <TableRow key={i}>

            <TableCell>
                <Button disabled variant="outline" size="xs">
                    <Search className="size-3" />
                    <span className="sr-only">Details of order</span>
                </Button>
            </TableCell>


            <TableCell>
                <Skeleton className="h-4 w-[172px]" />
            </TableCell>

            <TableCell>
                <Skeleton className="h-4 w-[148px]" />
            </TableCell>

            <TableCell>
                <Skeleton className="h-4 w-[110px]" />
            </TableCell>

            <TableCell>
                <Skeleton className="h-4 w-[200px]" />
            </TableCell>

            <TableCell>
                <Skeleton className="h-4 w-[64px]" />
            </TableCell>


            <TableCell>
                <Skeleton className="h-4 w-[92px]" />
            </TableCell>


            <TableCell>
                <Skeleton className="h-4 w-[92px]" />
            </TableCell>
        </TableRow>
    ))
}