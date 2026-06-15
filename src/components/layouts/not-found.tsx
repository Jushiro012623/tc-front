import {Button, Main} from "@components/ui";

export const NotFound = () => {
    return (
        <Main className="flex items-center justify-center min-h-[60vh] px-6">
            <div className="text-center max-w-md space-y-3">

                <p className="text-5xl">🧺</p>

                <h2 className="text-xl font-medium">
                    This piece wandered off
                </h2>

                <p className="text-muted-foreground text-sm">
                    We couldn’t find this item in our thrift collection. It may have been sold or removed.
                </p>

                <Button
                    className="mt-4"
                    onClick={() => window.location.href = '/'}
                >
                    Back to Finds
                </Button>

            </div>
        </Main>
    )
}