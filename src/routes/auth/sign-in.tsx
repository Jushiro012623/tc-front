import {createFileRoute, Link} from "@tanstack/react-router";
import {Button, Input, Main} from "#/components/ui";
import {FacebookIcon, GoogleIcon} from "#/components/icon";

export const Route = createFileRoute("/auth/sign-in")({
    component: RouteComponent,
    head: () => ({
        meta: [
            {title: 'Sign In | Triumphs Co.'},
            {
                name: 'description',
                content:
                    'Sign in to Triumphs Co. to access your saved thrift finds, order history, and early access to curated drops.'
            },
            {
                property: 'og:title',
                content: 'Sign In | Triumphs Co.'
            },
            {
                property: 'og:description',
                content:
                    'Access your Triumphs Co. account to manage orders and saved thrifted pieces.'
            },
            {
                property: 'og:type',
                content: 'website'
            },
            { name: 'robots', content: 'noindex, nofollow' }
        ]
    })
});

function RouteComponent() {
    return (
        <Main className="flex">

            <div className="flex flex-col justify-center w-full lg:w-1/2 h-fit p-6 sm:p-12 md:p-16  mx-auto">
                <div className="w-full max-w-md mx-auto">
                    <header className="mb-10 space-y-3 text-center lg:text-left">
                        <span className="font-serif text-sm tracking-[0.25em] uppercase text-muted-foreground">
                            Triumphs Co.
                        </span>

                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
                            Welcome Back
                        </h1>

                        <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                            Access your saved finds, past orders, and early thrift drops
                        </p>
                    </header>

                    <form className="space-y-5">
                        <div className="space-y-4">
                            <Input
                                label="Email"
                                placeholder="john@example.com"
                            />

                            <div className="space-y-1">
                                <Input
                                    label="Password"
                                    type="password"
                                    className="tracking-widest"
                                    placeholder="••••••••"
                                />
                                <div className="flex justify-end pt-1">
                                    <button type="button"
                                            className="text-xs text-muted-foreground hover:text-primary hover:underline transition-colors">
                                        Forgot Password?
                                    </button>
                                </div>
                            </div>
                        </div>

                        <Button className="w-full rounded-full py-6 text-md mt-2">
                            Sign In
                        </Button>

                        <div className="relative py-4">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t border-border"/>
                            </div>
                            <div className="relative flex justify-center">
                                <span
                                    className="bg-background px-4 text-xs font-medium tracking-wider text-muted-foreground uppercase">
                                    Or sign in with
                                </span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <Button variant="muted" type="button" className="justify-center gap-3 w-full">
                                <GoogleIcon className="size-4"/>
                                Google
                            </Button>

                            <Button variant="muted" type="button" className="justify-center gap-3 w-full">
                                <FacebookIcon className="size-4"/>
                                Facebook
                            </Button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-muted-foreground">
                        New to Triumphs Co?{" "}
                        <Link to="/auth/sign-up"
                              className="font-medium text-primary hover:text-primary/80 underline underline-offset-4 transition-colors">
                            Join the thrift community
                        </Link>
                    </p>
                </div>
            </div>
        </Main>
    );
}