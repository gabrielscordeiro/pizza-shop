import { render } from '@testing-library/react'
import { expect } from 'vitest'

import { OrderStatus } from '@/components/order-status'

describe('Order Status', () => {
    it('should display the right text when order status is Pending', () => {
        const wrapper = render(<OrderStatus status="pending" />)

        //wrapper.debug()

        const statusText = wrapper.getByText('Pending')
        const badgeElement = wrapper.getByTestId('badge')

        expect(statusText).toBeInTheDocument()
        expect(badgeElement).toHaveClass('bg-slate-400')

    })

    it('should display the right text when order status is Canceled', () => {
        const wrapper = render(<OrderStatus status="canceled" />)

        const statusText = wrapper.getByText('Canceled')
        const badgeElement = wrapper.getByTestId('badge')

        expect(statusText).toBeInTheDocument()
        expect(badgeElement).toHaveClass('bg-rose-500')
    })

    it('should display the right text when order status is Delivering', () => {
        const wrapper = render(<OrderStatus status="delivering" />)

        const statusText = wrapper.getByText('Delivering')
        const badgeElement = wrapper.getByTestId('badge')

        expect(statusText).toBeInTheDocument()
        expect(badgeElement).toHaveClass('bg-amber-500')
    })

    it('should display the right text when order status is Processing', () => {
        const wrapper = render(<OrderStatus status="processing" />)

        const statusText = wrapper.getByText('Processing')
        const badgeElement = wrapper.getByTestId('badge')

        expect(statusText).toBeInTheDocument()
        expect(badgeElement).toHaveClass('bg-amber-500')
    })


    it('should display the right text when order status is Delivered', () => {
        const wrapper = render(<OrderStatus status="delivered" />)

        const statusText = wrapper.getByText('Delivered')
        const badgeElement = wrapper.getByTestId('badge')

        expect(statusText).toBeInTheDocument()
        expect(badgeElement).toHaveClass('bg-emerald-500')
    })
})