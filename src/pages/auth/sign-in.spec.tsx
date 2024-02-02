import { QueryClientProvider } from '@tanstack/react-query'
import { render } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import { MemoryRouter } from 'react-router-dom'
import { expect } from 'vitest'

import { queryClient } from '@/lib/react-query.ts'
import { SignIn } from '@/pages/auth/sign-in.tsx'

describe('SignIn', () => {
    it('should set default email input value if email is present on search params', () => {
        const wrapper = render( <SignIn />,
            {
                wrapper: ({ children }) => {
                    return (
                        <HelmetProvider>
                            <MemoryRouter initialEntries={['/sign-in?email=johndoe@example.com']}>
                                <QueryClientProvider client={queryClient}>
                                    {children}
                                </QueryClientProvider>
                            </MemoryRouter>
                        </HelmetProvider>
                    )
                }
            })

        const emailInput = wrapper.getByLabelText('Your email:') as HTMLInputElement
        
        expect(emailInput.value).toEqual('johndoe@example.com')
    })
})