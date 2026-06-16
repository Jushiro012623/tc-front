import {createFileRoute, Link, useNavigate} from '@tanstack/react-router'
import {Button, Main} from "#/components/ui";
import {ArrowRight} from "lucide-react";
import {FeatureItem} from "#/components/layouts";
import {ProductCard} from "#/components/products/product-card.tsx";
import {SAMPLE_PRODUCTS} from "#/lib/products.ts";
import {ShopBadge} from "#/constants.ts";

export const Route = createFileRoute('/')({
    component: Home,
    head: () => ({
        meta: [
            {title: `Home | Triumph Co.`}
        ]
    })
})

function Home() {
    const navigate = useNavigate()
    const featuredProducts = SAMPLE_PRODUCTS.slice(0, 4)
    return (
        <Main>
            {/*---------------------------------------------HERO SECTION---------------------------------------------*/}
            <section
                className="relative w-full min-h-[70vh] lg:min-h-[85vh] flex items-center justify-center px-6 sm:px-8 lg:px-12">
                <img
                    src="/assets/hero2.jpg"
                    alt="Apparel"
                    className="absolute inset-0 h-full w-full object-cover object-top opacity-40"
                />

                <div className="absolute inset-0 bg-black/20"/>
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent"/>

                <div className="relative z-10 max-w-4xl text-center flex flex-col items-center">
                    <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-tight">
                        Curated Thrift Finds
                    </h1>

                    <p className="mt-2 max-w-2xl sm:text-lg md:text-xl text-white">
                        Discover handpicked vintage and pre-loved pieces with character, quality, and style.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <Button size="lg" className="w-full sm:w-auto">
                            Browse Collection <ArrowRight size={15}/>
                        </Button>

                        <Button variant="bordered" size="lg" className="w-full sm:w-auto">
                            Why Thrift?
                        </Button>
                    </div>
                </div>
            </section>
            {/*----------------------------BADGE SECTION----------------------------*/}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12 lg:my-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {ShopBadge.map(({icon, title, description, color}) => (
                        <FeatureItem
                            key={title}
                            icon={icon}
                            color={color}
                            title={title}
                            description={description}
                        />
                    ))}
                </div>
            </section>

            {/*----------------------------FEATURED PRODUCTS SECTION----------------------------*/}
            <section className="border-t border-border w-full py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto flex flex-col items-center">
                    <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-center">
                        Latest Arrivals
                    </h1>

                    <p className="mt-4 text-center text-sm lg:text-lg text-muted-foreground max-w-2xl">
                        Unique vintage and thrifted pieces added to our collection this week.
                    </p>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12 w-full">
                        {featuredProducts.map((product) => (<ProductCard key={product.id} product={product}/>))}
                    </div>

                    <Button
                        onClick={() => navigate({to: '/shop'})}
                        variant="muted"
                        size="lg"
                        className="mt-10 w-full sm:w-auto"
                    >
                        Shop All Finds
                        <ArrowRight size={15}/>
                    </Button>
                </div>
            </section>
            <section className="border-t border-border text-cream py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center space-y-6">
                        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-center">
                            Give Fashion A Second Life
                        </h2>

                        <p className="mt-4 text-center text-sm lg:text-lg text-muted-foreground max-w-2xl">
                            Every thrifted piece helps reduce waste, extend the life of quality garments, and make
                            fashion more accessible for everyone.
                        </p>
                        <Link to="/">
                            <Button size="lg" className="mt-5 gap-2">
                                Why Thrifting Matters
                                <ArrowRight className="w-5 h-5"/>
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </Main>
    )
}
