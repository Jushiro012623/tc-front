import {BrandLogo} from "#/components/ui";

export const LoginHero = () => {
    return (
        <div className="hidden lg:flex relative w-full lg:w-1/2 overflow-hidden bg-zinc-950">

            <img
                src="/assets/login-image.webp"
                alt="Fashion preview"
                className="absolute inset-0 h-full w-full object-cover object-top opacity-90"
            />

            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

            <div className="absolute top-12 left-12 z-20">
                <BrandLogo iconOnly={false}  />
            </div>

            <div className="relative z-10 w-full p-12 flex flex-col justify-end text-white h-full pb-20">
                <h1 className="font-serif text-6xl xl:text-7xl leading-[1.1] mb-6 tracking-tight">
                    Crafting your <br/>
                    <span className="italic font-light text-white/80">personal identity.</span>
                </h1>
                <p className="text-white/60 font-sans tracking-[0.2em] uppercase text-xs font-semibold">
                    Triumph Co. {new Date().getFullYear()}
                </p>
            </div>
        </div>
    )
}