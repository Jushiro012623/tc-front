import { Link } from "@tanstack/react-router"
import { Button } from "@components/ui"

export function NotFound() {
    return (
        <div className="min-h-[70vh] flex items-center justify-center px-6">
            <div className="max-w-md w-full text-center">

                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                    Listing Unavailable
                </p>

                <h1 className="font-serif text-4xl md:text-5xl leading-tight">
                    Someone got to it first.
                </h1>

                <p className="mt-4 text-muted-foreground leading-relaxed">
                    This item is no longer available. It may have been sold,
                    removed, or archived.
                </p>

                <div className="my-8 h-px bg-border" />

                <div className="space-y-3">
                    <Link to="/shop" className="block">
                        <Button className="w-full">
                            Browse More Finds
                        </Button>
                    </Link>

                    <Button
                        variant="muted"
                        className="w-full"
                        onClick={() => window.history.back()}
                    >
                        Go Back
                    </Button>
                </div>

            </div>
        </div>
    )
}