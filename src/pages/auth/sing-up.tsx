import { useMutation } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { registerRestaurant } from '@/api/register-restaurant.ts'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const SignUpForm = z.object({
    restaurantName: z.string(),
    managerName: z.string(),
    phone: z.string(),
    email: z.string().email()
})

type SignUpForm = z.infer<typeof SignUpForm>

export function SignUp() {

    const {
        register,
        handleSubmit,
        formState: { isSubmitting }
    } = useForm<SignUpForm>()

    const { mutateAsync: registerRestaurantFn } = useMutation({
        mutationFn: registerRestaurant
    })

    const navigate = useNavigate()

    async function handleSignUp(data: SignUpForm) {

        try {
            await registerRestaurantFn({
                restaurantName: data.restaurantName,
                managerName: data.managerName,
                email: data.email,
                phone: data.phone
            })

            toast.success('Restaurant successfully registered.', {
                action: {
                    label: 'Login',
                    onClick: () => navigate(`/sign-in?email=${data.email}`)
                }
            })
        } catch (error) {
            toast.error('Error when registering restaurant')
            console.log(error)
        }
    }

    return (
        <>
            <Helmet title="Register" />
            <div className="p-8">
                <Button variant="outline" asChild className="absolute right-8 top-8">
                    <Link to="/sign-in">
                        Already have an account? Log in
                    </Link>
                </Button>
                <div className="flex w-[350px] flex-col justify-center gap-6">
                    <div className="flex flex-col gap-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">Create a new free account</h1>
                        <p className="text-sm text-muted-foreground">Become a partner and start your sales</p>
                    </div>

                    <form className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
                        <div className="space-y-2">
                            <Label htmlFor="restaurantName">Restaurant name:</Label>
                            <Input
                                id="restaurantName"
                                type="text"
                                {...register('restaurantName')}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="managerName">Your name:</Label>
                            <Input
                                id="managerName"
                                type="text"
                                {...register('managerName')}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Your email:</Label>
                            <Input
                                id="email"
                                type="text"
                                {...register('email')}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="phone">Your phone number:</Label>
                            <Input
                                id="phone"
                                type="tel"
                                {...register('phone')}
                            />
                        </div>

                        <Button
                            disabled={isSubmitting}
                            className="w-full"
                            type="submit"
                        >
                            Register
                        </Button>

                        <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
                            By continuing, you agree to our {' '}
                            <a href="#" className="underline underline-offset-4">Terms of Service</a> and {' '}
                            <a className="underline underline-offset-4" href="#">Privacy Policy</a>.
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}