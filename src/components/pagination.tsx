import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react'

import { Button } from '@/components/ui/button.tsx'

export interface PaginationProps {
    pageIndex: number
    totalCount: number
    perPage: number
    onPageChange: (pageIndex: number) => Promise<void> | void
}
export function Pagination({
    pageIndex,
    totalCount,
    perPage,
    onPageChange
}: PaginationProps) {
    const pages = Math.ceil(totalCount / perPage) || 1

    return (
        <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
                Total of {totalCount} item(s)
            </span>

            <div className="flex items-center gap-6 lg:gap-8">
                <div className="text-sm font-medium">Page {pageIndex + 1} of {pages}</div>

                <div className="flex items-center gap-2">
                    <Button
                        onClick={() => onPageChange(0)}
                        variant="outline"
                        className="size-8 p-0"
                        disabled={pageIndex === 0}
                    >
                        <ChevronsLeft className="size-4" />
                        <span className="sr-only">First page</span>
                    </Button>

                    <Button
                        onClick={() => onPageChange(pageIndex - 1)}
                        variant="outline"
                        className="size-8 p-0"
                        disabled={pageIndex === 0}
                    >
                        <ChevronLeft className="size-4" />
                        <span className="sr-only">Previous page</span>
                    </Button>

                    <Button
                        onClick={() => onPageChange(pageIndex + 1)}
                        variant="outline"
                        className="size-8 p-0"
                        disabled={pages <= pageIndex + 1}
                    >
                        <ChevronRight className="size-4" />
                        <span className="sr-only">Next page</span>
                    </Button>

                    <Button
                        onClick={() => onPageChange(pages - 1)}
                        variant="outline"
                        className="size-8 p-0"
                        disabled={pages <= pageIndex + 1}
                    >
                        <ChevronsRight className="size-4" />
                        <span className="sr-only">Last page</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}