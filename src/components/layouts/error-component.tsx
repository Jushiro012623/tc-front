import {Button} from "@components/ui"
import {type ErrorComponentProps} from "@tanstack/react-router"

export function ErrorComponent({error}: ErrorComponentProps) {
    return (
        <div className="min-h-[70vh] flex items-center justify-center px-6">
            <div className="max-w-md w-full text-center">

                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                    Unexpected Error
                </p>

                <h1 className="font-serif text-4xl md:text-5xl leading-tight">
                    Something went wrong.
                </h1>

                <p className="mt-4 text-muted-foreground leading-relaxed">
                    {"An unexpected error occurred."}
                </p>

                <div className="my-8 h-px bg-border"/>

                <Button
                    className="w-full"
                    onClick={() => window.location.reload()}
                >
                    Try Again
                </Button>

            </div>
        </div>
    )
}