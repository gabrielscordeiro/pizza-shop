import { Link, useRouteError } from 'react-router-dom'

export function Error() {
    const error = useRouteError() as Error

    return (
        <div className="flex h-screen flex-col items-center justify-center gap-2">
            <h1 className="text-4xl font-bold">Whoops, something went wrong...</h1>
            <p className="text-accent-foreground">
                An error occurred in the application, below you will find more details:
            </p>
            <pre>
                {error?.message || JSON.stringify(error)}
            </pre>
            <p>
                Back to {' '} <Link to="/" className="text-sky-500 underline-offset-4 hover:underline dark:text-sky-400">Dashboard</Link>
            </p>
        </div>
    )
}