import {Button} from "@components/ui";
import {ArrowRight} from "lucide-react";

export const HeroSection = () => {
    return (
        <section className="relative w-full min-h-[70vh] lg:min-h-[85vh] flex items-center justify-center px-6 sm:px-8 lg:px-12">
            <img
                src="/assets/hero1.jpg"
                alt="Fashion preview"
                className="absolute inset-0 h-full w-full object-cover object-top opacity-40"
            />

            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            <div className="relative z-10 max-w-4xl text-center flex flex-col items-center">
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-tight">
                    Sustainable Luxury
                </h1>

                <p className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-white/80">
                    Premium minimalist fashion that respects both you and
                    the planet.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <Button
                        size="lg"
                        className="w-full sm:w-auto"
                    >
                        Shop Now
                        <ArrowRight size={15} />
                    </Button>

                    <Button
                        variant="secondary"
                        size="lg"
                        className=" w-full sm:w-auto text-white"
                    >
                        Learn Our Story
                    </Button>
                </div>
            </div>
        </section>
    )
}