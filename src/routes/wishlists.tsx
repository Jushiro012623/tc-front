import {createFileRoute, Link} from '@tanstack/react-router'
import {motion} from "framer-motion";
import type {Product} from "#/lib/types.ts";
import {fadeUp, staggerContainer} from "#/lib/framer-motion.ts";
import {ProductCard} from "@components/products/product-card.tsx";
import {useWishlistStore} from "#/lib/store.ts";
import {Button} from "@components/ui";
import {Heart} from "lucide-react";
import {defaultShopFilter} from "#/constants.ts";

export const Route = createFileRoute('/wishlists')({
    component: RouteComponent,
    head: () => ({
        meta: [
            {
                title: 'Your Wishlist | Triumphs Co.'
            },
            {
                name: 'description',
                content:
                    'View and manage your saved items at Triumphs Co. Keep track of your favorite thrifted pieces and shop them later anytime.'
            },
            {
                property: 'og:title',
                content: 'Your Wishlist | Triumphs Co.'
            },
            {
                property: 'og:description',
                content:
                    'Your saved thrifted pieces in one place. Revisit, review, and shop your favorite finds anytime.'
            },
            {
                property: 'og:type',
                content: 'website'
            }
        ],
    })
})

function RouteComponent() {
    const wishlist = useWishlistStore((state) => state.wishlist) ?? []

    return (
        <section className="w-full py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="show"
                className="max-w-7xl mx-auto flex flex-col items-center">
                <motion.h1
                    variants={fadeUp}
                    className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-tight"
                >
                    Your Wishlist
                </motion.h1>

                <motion.p
                    variants={fadeUp}
                    className="leading-8 max-w-3xl mt-6 text-muted-foreground mx-auto"
                >
                    Keep track of items you love. Your saved pieces will appear here for easy checkout later.
                </motion.p>

                {wishlist.length === 0 ? (
                    <div
                        className="mt-16 max-w-5xl mx-auto px-8 py-12 flex flex-col items-center text-center bg-background/40 backdrop-blur-sm">
                        <div
                            className="flex items-center justify-center text-muted-foreground text-xl mb-5">
                            <Heart size={50}/>
                        </div>

                        <h3 className="text-xl font-medium text-foreground">
                            No saved pieces yet
                        </h3>

                        <p className="mt-2 text-sm text-muted-foreground leading-6 max-w-md">
                            Start exploring and build your wishlist with items you love.
                        </p>
                        <Link to={'/shop'} search={defaultShopFilter}>
                            <Button className="mt-8">
                                Explore items
                            </Button>
                        </Link>
                    </div>
                ) : (
                    <motion.div
                        className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12 w-full"
                        initial="hidden"
                        animate="show"
                    >
                        {wishlist.map((product: Product, i: number) => (
                            <motion.div
                                key={product.id}
                                variants={fadeUp}
                                custom={i}
                            >
                                <ProductCard product={product}/>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </motion.div>
        </section>
    )
}