import {BrandLogo} from "@components/ui";

export function Loader() {
    return (

        <div className="relative flex min-h-[85vh] flex-col items-center justify-center gap-5 overflow-hidden">

            {/* soft ambient background glow */}
            <div className="absolute inset-0 -z-10">
                <div
                    className="absolute top-1/3 left-1/2 size-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]"/>
                <div className="absolute bottom-1/4 right-1/3 size-[250px] rounded-full bg-accent/10 blur-[120px]"/>
            </div>

            {/* logo container */}
            <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 animate-ping rounded-2xl bg-primary/10"/>
                <div className="animate-pulse">
                    <BrandLogo size={72} withBackground={false} iconOnly={true}/>
                </div>
            </div>

            {/* text block */}
            <div className="flex flex-col items-center gap-2">
                <p className="text-xs text-muted-foreground tracking-wide">
                    Preparing your experience
                    <span className="inline-flex ml-2 gap-0.5">
                        <span className="animate-bounce text-2xl [animation-delay:0ms]">.</span>
                        <span className="animate-bounce text-2xl [animation-delay:150ms]">.</span>
                        <span className="animate-bounce text-2xl [animation-delay:300ms]">.</span>
                    </span>
                </p>
            </div>
        </div>

    )
}
