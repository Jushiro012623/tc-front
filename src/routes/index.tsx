import {Await, createFileRoute, defer, Link} from '@tanstack/react-router'
import {Button, Main} from "#/components/ui";
import {ArrowRight} from "lucide-react";
import {FeatureItem, ShopSkeleton} from "#/components/layouts";
import {ProductCard} from "#/components/products/product-card.tsx";
import {fetchProducts} from "#/lib/products.ts";
import {defaultShopFilter, ShopBadge} from "#/constants.ts";
import {AnimatePresence, motion} from "framer-motion";
import {fadeUp} from "#/lib/framer-motion.ts";
import {Suspense, useEffect, useState} from "react";
import type {Product} from "#/lib/types.ts";

export const Route = createFileRoute('/')({
    component: Home,
    head: () => ({
        meta: [
            {title: `Home | Triumphs Co.`}
        ]
    }),
    loader: () => {
        return {
            productsDeferred: defer(fetchProducts({...defaultShopFilter, count: '4'})
            )
        }
    }
})

const images = [
    "/carousel/hero2.jpg",
    "/carousel/hero3.jpg",
    "/carousel/hero4.jpg",
];

function Home() {
    const {productsDeferred} = Route.useLoaderData()
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Main className="pb-16">
            {/*---------------------------------------------HERO SECTION---------------------------------------------*/}
            <section
                className="overflow-hidden  relative w-full min-h-[70vh] lg:min-h-[85vh] flex items-center justify-center px-6 sm:px-8 lg:px-12">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={images[index]}
                        src={images[index]}
                        alt="Apparel"
                        className="absolute inset-0 h-full w-full object-cover object-top"
                        initial={{opacity: 0, scale: 1.05}}
                        animate={{opacity: 1, scale: 1}}
                        exit={{opacity: 0, scale: 1.05}}
                        transition={{duration: 0.8, ease: "easeInOut"}}
                    />
                </AnimatePresence>

                <div className="absolute inset-0 bg-black/20"/>
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent"/>

                <motion.div
                    initial="hidden"
                    animate="show"
                    className="relative z-10 max-w-4xl text-center flex flex-col items-center">
                    <motion.h1
                        variants={fadeUp}
                        custom={0}
                        className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-tight">
                        Curated Thrift Finds
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        custom={1}
                        className="leading-8 mt-2 max-w-2xl sm:text-lg md:text-xl text-white">
                        Discover handpicked vintage and pre-loved pieces with character, quality, and style.
                    </motion.p>

                    <motion.div
                        variants={fadeUp}
                        custom={2}
                        className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <Link to="/shop" search={defaultShopFilter}>
                            <Button size="lg" className="w-full sm:w-auto">
                                Browse Collection <ArrowRight size={15}/>
                            </Button>
                        </Link>

                        <Link to="/about" search={defaultShopFilter}>
                            <Button
                                variant="bordered"
                                size="lg"
                                className="w-full sm:w-auto">
                                Why Thrift?
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>
            </section>
            {/*----------------------------BADGE SECTION----------------------------*/}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12 lg:my-16">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: true, amount: 0.2}}
                >
                    {ShopBadge.map((item, i) => (
                        <motion.div
                            key={item.title}
                            variants={fadeUp}
                            custom={i}
                        >
                            <FeatureItem {...item} />
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/*----------------------------FEATURED PRODUCTS SECTION----------------------------*/}
            <section className="w-full py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto flex flex-col items-center">
                    <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-center">
                        Latest Arrivals
                    </h1>

                    <p className="leading-8 mt-4 text-center text-sm lg:text-lg text-muted-foreground max-w-2xl">
                        Unique vintage and thrifted pieces added to our collection this week.
                    </p>

                    <Suspense
                        fallback={
                            <motion.div
                                className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12 w-full"
                                initial="hidden"
                                whileInView="show"
                                viewport={{once: true, amount: 0.2}}
                            >
                                {[...Array(4)].map((_, i) => (
                                    <ShopSkeleton key={i}/>
                                ))}
                            </motion.div>
                        }
                    >
                        <Await promise={productsDeferred}>
                            {(products) => (
                                <motion.div
                                    className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12 w-full"
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{once: true, amount: 0.2}}
                                >
                                    {products.map((product: Product, i: number) => (
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
                        </Await>
                    </Suspense>

                    <Link to="/shop" search={defaultShopFilter}>
                        <Button
                            variant="secondary"
                            size="lg"
                            className="mt-10 w-full sm:w-auto"
                        >
                            Shop All Finds
                            <ArrowRight size={15}/>
                        </Button>
                    </Link>
                </div>
            </section>
            <motion.section
                className="text-cream py-10 sm:py-24 max-w-7xl mx-auto bg-muted rounded-xl"
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 1}}
                viewport={{once: true}}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center space-y-6">
                        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-center">
                            Give Fashion A Second Life
                        </h2>

                        <p className="leading-8 max-w-2xl mx-auto mt-6 mb-8 text-muted-foreground">
                            Every thrifted piece helps reduce waste, extend the life of quality garments, and make
                            fashion more accessible for everyone.
                        </p>
                        <Link to="/about">
                            <Button size="lg" className="mt-5 w-full sm:w-auto">
                                Why Thrifting Matters
                                <ArrowRight className="w-5 h-5"/>
                            </Button>
                        </Link>
                    </div>
                </div>
            </motion.section>
        </Main>
    )
}
