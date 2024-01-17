import { ArrowRight, Search, X } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { Button } from '@/components/ui/button.tsx'
import { Input } from '@/components/ui/input.tsx'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table.tsx'

export function Orders() {
    return (
        <>
            <Helmet title="Orders" />
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold tracking-tight">
                    Orders
                </h1>
            </div>

            <div className="space-y-2.5">
                <form className="flex items-center gap-2">
                    <span className="text-sm font-semibold">Filters:</span>
                    <Input placeholder="Client name" className="h-8 w-[320px]"/>
                </form>

                <div className="border rounded-md">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[64px]"></TableHead>
                                <TableHead className="w-[140px]">Identifier</TableHead>
                                <TableHead className="w-[180px]">Accomplished in</TableHead>
                                <TableHead className="w-[140px]">Status</TableHead>
                                <TableHead>Client</TableHead>
                                <TableHead className="w-[140px]">Total of order</TableHead>
                                <TableHead className="w-[164px]"></TableHead>
                                <TableHead className="w-[132px]"></TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {Array.from({ length: 10 }).map((_, i) => (
                                <TableRow key={i}>
                                    <TableCell>
                                        <Button variant="outline" size="xs">
                                            <Search className="w-3 h-3" />
                                            <span className="sr-only">Details of order</span>
                                        </Button>
                                    </TableCell>

                                    <TableCell className="font-mono text-sm font-medium">
                                        123mans459dn1u23192
                                    </TableCell>

                                    <TableCell className="text-muted-foreground">
                                        15 minutes ago
                                    </TableCell>

                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-slate-400"></span>
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
                                            <ArrowRight className="w-3 h-3 mr-2" />
                                            Approve
                                        </Button>
                                    </TableCell>

                                    <TableCell>
                                        <Button variant="ghost" size="xs">
                                            <X className="w-3 h-3 mr-2" />
                                            Cancel
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </>
    )
}