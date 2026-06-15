import {createFileRoute, Link} from '@tanstack/react-router'
import {Button, Input, Main} from "#/components/ui";
import {FacebookIcon, GoogleIcon} from "#/components/icon";

export const Route = createFileRoute('/auth/sign-up')({
    component: RouteComponent,
    head: () => ({
        meta: [
            { title: 'Sign Up | Triumph Co.'}
        ]
    })
})

function RouteComponent() {
    return (
        <Main className="flex">
            <div className="flex flex-col justify-center w-full lg:w-1/2 h-fit p-6 sm:p-12 md:p-16 mx-auto">

                {/* Tighter max-w-sm wrapper matching the Sign In page */}
                <div className="w-full max-w-md mx-auto">

                    <header className="mb-10 space-y-3 text-center lg:text-left">
                    <span className="font-serif text-sm tracking-[0.25em] uppercase text-muted-foreground">
                        Triumph Co.
                    </span>

                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
                            Join the Thrift Community
                        </h1>

                        <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                            Create an account to save your finds, track orders, and get early access to new thrift drops.
                        </p>
                    </header>

                    <form className="space-y-5">
                        <div className="space-y-4">
                            <Input
                                label="Username"
                                placeholder="john_doe"
                            />

                            <Input
                                label="Email"
                                placeholder="john@example.com"
                            />

                            <Input
                                label="Password"
                                type="password"
                                className="tracking-widest"
                                placeholder="••••••••"
                                description="Use at least 8 characters with a mix of letters, numbers, and symbols for better security."
                            />

                            <Input
                                label="Confirm Password"
                                type="password"
                                className="tracking-widest"
                                placeholder="••••••••"
                            />
                        </div>

                        <Button className="w-full rounded-full py-6 text-sm mt-2 font-medium tracking-wide">
                            Create Account
                        </Button>

                        <p className="text-xs text-center text-muted-foreground leading-relaxed pt-2">
                            By joining, you agree to our{" "}
                            <a href="/privacy-policy" className="text-primary hover:text-primary/80 hover:underline transition-colors">
                                Privacy Policy
                            </a>{" "}
                            and{" "}
                            <a href="/terms" className="text-primary hover:text-primary/80 hover:underline transition-colors">
                                Terms of Service
                            </a>.
                        </p>

                        <div className="relative py-3">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t border-border"/>
                            </div>
                            <div className="relative flex justify-center">
                            <span className="bg-background px-3 text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
                                Or sign up with
                            </span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <Button variant="secondary" type="button" className="justify-center gap-2 w-full text-xs py-5">
                                <GoogleIcon className="size-3.5"/>
                                Google
                            </Button>

                            <Button variant="secondary" type="button" className="justify-center gap-2 w-full text-xs py-5">
                                <FacebookIcon className="size-3.5"/>
                                Facebook
                            </Button>
                        </div>

                    </form>

                    <p className="mt-10 text-center text-sm text-muted-foreground">
                        Already part of the thrift community?{" "}
                        <Link
                            to="/auth/sign-in"
                            className="font-medium text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
                        >
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </Main>
    )
}
