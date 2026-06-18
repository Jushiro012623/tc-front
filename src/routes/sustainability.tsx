import {createFileRoute, Link} from '@tanstack/react-router'
import {commitments, defaultShopFilter} from "#/constants.ts";
import {ArrowRight} from "lucide-react";
import {Button} from "@components/ui";

export const Route = createFileRoute('/sustainability')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <main className="max-w-7xl mx-auto px-6 py-16">
            <section className="flex flex-col items-center justify-center">
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-medium leading-tight">
                    Our Sustainability Journey
                </h1>

                <p className="leading-8 max-w-3xl mt-6 text-muted-foreground">
                    At Triumph Co, sustainability isn't a buzzword—it's embedded in every decision we make.
                </p>

            </section>

            <section className="my-24">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-center">
                    Our Commitments
                </h2>

                <p className="leading-8 text-center max-w-xl mx-auto mt-6 mb-12 text-muted-foreground">
                    These commitments guide how we operate and help us create a more
                    sustainable future through conscious fashion.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                    {commitments.map((item) => (
                        <div
                            key={item.title}
                            className="bg-muted/50 rounded-xl p-8"
                        >
                            <h3 className="font-serif text-2xl font-bold mb-3">
                                {item.title}
                            </h3>

                            <p className="leading-8 max-w-2xl text-muted-foreground">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="my-24">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium">
                        Why Thrifting Matters
                    </h2>

                    <p className="leading-8 mt-6 text-muted-foreground">
                        The fashion industry produces millions of tons of textile waste
                        every year. Choosing second-hand clothing is one of the simplest
                        ways individuals can reduce their environmental footprint while
                        still enjoying fashion and self-expression.
                    </p>

                    <p className="leading-8 mt-4 text-muted-foreground">
                        Small choices add up. Every thrifted item purchased helps support a
                        circular fashion economy where clothing is reused, appreciated, and
                        kept in use for as long as possible.
                    </p>
                </div>
            </section>

            <section className="text-cream py-10 sm:py-24 bg-muted rounded-xl">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center space-y-6">
                        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-center">
                            Be Part of the Movement
                        </h2>

                        <p className="leading-8 max-w-2xl mx-auto mt-6 mb-8 text-muted-foreground">
                            Sustainability isn't achieved by one business alone—it's built through
                            collective action. By choosing thrifted fashion, you're helping create
                            a future where style and responsibility go hand in hand.
                        </p>
                        <Link to="/shop" search={defaultShopFilter}>
                            <Button size="lg" className="w-full sm:w-auto">
                                Explore Our Collection <ArrowRight size={15}/>
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}
