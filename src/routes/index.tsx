import {createFileRoute} from '@tanstack/react-router'
import {Button, Main} from "@components/ui";
import {ArrowRight, Heart, Leaf, Zap} from "lucide-react";
import {HeroSection} from "@features/home/components/hero-section.tsx";
import {FeatureItem} from "@features/home/components/feature-item.tsx";
import {ProductCard} from "@components/products/product-card.tsx";
import {SAMPLE_PRODUCTS} from "#/lib/products.ts";

export const Route = createFileRoute('/')({component: Home})

function Home() {
    const featuredProducts = SAMPLE_PRODUCTS.slice(0, 4)
    return (
        <Main>
            <HeroSection/>
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12 lg:my-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "100% Sustainable",
                            icon: <Leaf className="text-primary" size={30}/>,
                            description:
                                "Every piece is ethically sourced and environmentally responsible",
                        },
                        {
                            title: "Premium Quality",
                            icon: <Heart className="text-amber-700" size={30}/>,
                            description:
                                "Timeless pieces designed to last a lifetime",
                        },
                        {
                            title: "Fast Shipping",
                            icon: <Zap className="text-primary" size={30}/>,
                            description:
                                "Free shipping on orders over $100",
                        },
                    ].map(({icon, title, description}) => (
                        <FeatureItem
                            key={title}
                            icon={icon}
                            title={title}
                            description={description}
                        />
                    ))}
                </div>
            </section>

            <section className="border-t border-border w-full py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto flex flex-col items-center">
                    <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-center">
                        Featured Collection
                    </h1>

                    <p className="mt-4 text-center text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl">
                        Discover our most loved pieces, handpicked for style and
                        sustainability
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 w-full">
                        {featuredProducts.map((product) => (
                            <ProductCard key={product.id} product={product}/>
                        ))}
                    </div>

                    <Button
                        variant="secondary"
                        size="lg"
                        className="mt-10 w-full sm:w-auto"
                    >
                        View All Products
                        <ArrowRight size={15}/>
                    </Button>
                </div>
            </section>
        </Main>
    )
}
