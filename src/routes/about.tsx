import {createFileRoute, Link} from "@tanstack/react-router"
import {defaultShopFilter, values} from "#/constants.ts";
import {Button} from "@components/ui";
import {ArrowRight} from "lucide-react";

export const Route = createFileRoute("/about")({
    component: AboutPage,
})

function AboutPage() {

    return (
        <main className="max-w-7xl mx-auto px-6 py-16">
            {/* Hero */}
            <section className="flex flex-col text-left">
                <span className="text-sm font-semibold tracking-wider uppercase text-primary">
                    About Us
                </span>

                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-tight">
                    Style That Deserves a Second Chance
                </h1>

                <p className="mt-4 text-sm lg:text-lg text-muted-foreground max-w-2xl leading-8">
                    At TC, we curate quality pre-loved pieces that help you express your style
                    while making fashion more affordable and sustainable.
                </p>
            </section>
            {/* About TC */}
            <section className="mb-35 mt-15">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium mb-6">
                            About Triumphs Co.
                        </h2>

                        <p className="leading-8 mt-4 text-muted-foreground max-w-2xl">
                            Triumphs Co. was founded with a simple belief: great clothing shouldn't be worn only
                            once. We carefully source and curate pre-loved pieces, giving them a second
                            life while helping people discover unique styles at accessible prices.
                        </p>

                        <p className="leading-8 mt-4 text-muted-foreground max-w-2xl">
                            Every item in our collection has its own story. From vintage finds to
                            everyday essentials, we aim to make sustainable fashion an easy and exciting
                            choice for everyone.
                        </p>
                    </div>

                    <div className="rounded-2xl overflow-hidden bg-muted min-h-96 flex items-center justify-center">
                        <img
                            src="/about/hero1.jpg"
                            alt="TC thrift shop collection"
                            className="w-full h-100 object-cover"
                        />
                    </div>
                </div>
            </section>
            {/* Mission */}
            <section className="mb-20 mt-30">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="lg:col-start-2">
                        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium mb-6">
                            Our Mission
                        </h2>

                        <p className="leading-8 text-muted-foreground max-w-2xl">
                            We started Triumphs Co. with a simple goal: to make great fashion
                            more affordable, sustainable, and accessible. By curating quality
                            pre-loved clothing, we help people build a wardrobe they love
                            without the high price tag of fast fashion.
                        </p>

                        <p className="leading-8 mt-4 text-muted-foreground max-w-2xl">
                            Beyond clothing, we're building a community that values creativity,
                            individuality, and responsible consumption. Every purchase supports
                            a more sustainable future by keeping wearable garments in circulation
                            and out of landfills.
                        </p>
                    </div>

                    <div className="lg:row-start-1 lg:col-start-1 rounded-2xl overflow-hidden min-h-96">
                        <img
                            src="/about/mission.jpg"
                            alt="TC thrift shop collection"
                            className="w-full h-full min-h-96 object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="mb-20 flex flex-col items-center justify-center min-h-96">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-center mb-12">
                    Our Values
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {values.map((value) => (
                        <div
                            key={value.title}
                            className="bg-muted/50 rounded-xl p-8 text-center"
                        >
                            <h3 className="font-serif text-2xl font-semibold mb-3">
                                {value.title}
                            </h3>

                            <p className="mt-4 text-muted-foreground max-w-2xl leading-8 ">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>


            <section className="text-cream py-10 sm:py-24 bg-muted rounded-xl ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center space-y-6">
                        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-center">
                            Ready to Discover Your Next Find?
                        </h2>

                        <p className="leading-8 max-w-2xl mx-auto mt-6 mb-8 text-muted-foreground">
                            Explore our collection of carefully curated pre-loved clothing and uncover
                            unique pieces that match your style while supporting sustainable fashion.
                        </p>
                        <Link to="/shop" search={defaultShopFilter}>
                            <Button size="lg" className="w-full sm:w-auto">
                                Shop Collection
                                <ArrowRight className="w-5 h-5"/>
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}