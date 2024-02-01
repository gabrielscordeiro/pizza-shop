import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { expect } from 'vitest'

import { NavLink } from '@/components/nav-link'

describe('MavLink', () => {
    it('should highlight the nav link when is the current page link', () => {
        const wrapper = render(
            <>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
            </>,
            {
                wrapper: ({ children }) => {
                    return (
                        <MemoryRouter initialEntries={['/about']}>
                            {children}
                        </MemoryRouter>
                    )
                }
            })

        expect(wrapper.getByText('Home').dataset.current).toEqual('false')
        expect(wrapper.getByText('About').dataset.current).toEqual('true')
    })
})