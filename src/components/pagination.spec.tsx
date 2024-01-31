import { render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { beforeEach, expect } from 'vitest'

import { Pagination } from '@/components/pagination.tsx'

// "vi" is native from Vitest. It's been called as SPIE
const onPageChangeCallback = vi.fn()

describe('Pagination', () => {
    beforeEach(() => {
        // clear the call's between the tests
        onPageChangeCallback.mockClear()
    })


    it('should display the right amount of pages and results', () => {
        const wrapper = render(
            <Pagination
                pageIndex={0}
                totalCount={200}
                perPage={10}
                onPageChange={() =>  {}}
            />
        )

        expect(wrapper.getByText('Page 1 of 20')).toBeInTheDocument()
        expect(wrapper.getByText('Total of 200 item(s)')).toBeInTheDocument()
    })

    it('should be able to navigate to the next page', async () => {
        const user = userEvent.setup()

        const wrapper = render(
            <Pagination
                pageIndex={0}
                totalCount={200}
                perPage={10}
                onPageChange={onPageChangeCallback}
            />
        )

        const nextPageButton = wrapper.getByRole('button', {
            name: 'Next page'
        })

        await user.click(nextPageButton)

        expect(onPageChangeCallback).toHaveBeenCalledWith(1)
    })

    it('should be able to navigate to the previous page', async () => {
        const user = userEvent.setup()

        const wrapper = render(
            <Pagination
                pageIndex={5}
                totalCount={200}
                perPage={10}
                onPageChange={onPageChangeCallback}
            />
        )

        const nextPageButton = wrapper.getByRole('button', {
            name: 'Previous page'
        })

        await user.click(nextPageButton)

        expect(onPageChangeCallback).toHaveBeenCalledWith(4)
    })


    it('should be able to navigate to the first page', async () => {
        const user = userEvent.setup()

        const wrapper = render(
            <Pagination
                pageIndex={5}
                totalCount={200}
                perPage={10}
                onPageChange={onPageChangeCallback}
            />
        )

        const nextPageButton = wrapper.getByRole('button', {
            name: 'First page'
        })

        await user.click(nextPageButton)

        expect(onPageChangeCallback).toHaveBeenCalledWith(0)
    })


    it('should be able to navigate to the last page', async () => {
        const user = userEvent.setup()

        const wrapper = render(
            <Pagination
                pageIndex={0}
                totalCount={200}
                perPage={10}
                onPageChange={onPageChangeCallback}
            />
        )

        const nextPageButton = wrapper.getByRole('button', {
            name: 'Last page'
        })

        await user.click(nextPageButton)

        expect(onPageChangeCallback).toHaveBeenCalledWith(19)
    })
})