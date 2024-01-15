import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signInForm = z.object({
    email: z.string().email()
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {

    const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignInForm>()

    function handleSignIn(data: SignInForm) {
        console.log(data)
    }

    return (
        <>
            <Helmet title="Login" />
            <div className="p-8">
                <div className="w-[350px] flex flex-col justify-center gap-6">
                    <div className="flex flex-col gap-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">Access Dashboard</h1>
                        <p className="text-sm text-muted-foreground">Track your sales through the partner dashboard</p>
                    </div>

                    <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
                        <div className="space-y-2">
                            <Label htmlFor="email">Your e-mail:</Label>
                            <Input
                                id="email"
                                type="email"
                                {...register('email')}
                            />
                        </div>

                        <Button
                            disabled={isSubmitting}
                            className="w-full"
                            type="submit"
                        >
                            Access Dashboard
                        </Button>
                    </form>
                </div>
            </div>
        </>
    )
}