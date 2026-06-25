import {createFileRoute, defer, Await} from '@tanstack/react-router'
import {Button, GlareCard, Main} from '@components/ui'
import {fetchProducts} from '#/lib/products'
import {ProductCard} from '@components/products/product-card'
import {Suspense} from 'react'
import {ShopFilters, ShopSkeleton} from "@components/layouts"
import {motion} from "framer-motion"
import {fadeUp} from "#/lib/framer-motion.ts"
import {defaultShopFilter} from "#/constants.ts";

export const Route = createFileRoute('/shop')({
    component: Component,
    head: () => ({
        meta: [
            {
                title: `Shop | Triumphs Co.`
            },
            {
                name: 'description',
                content: 'Browse curated thrifted, vintage, and one-of-a-kind fashion pieces from Triumphs Co.',
            },
            {
                property: 'og:title',
                content: 'Shop | Triumphs Co.',
            },
            {
                property: 'og:description',
                content: 'Browse curated thrifted, vintage, and one-of-a-kind fashion pieces.',
            },
        ]
    }),
    loaderDeps: ({search}) => {
        return search
    },
    loader: ({deps}) => {
        return {
            productsDeferred: defer(fetchProducts(deps))
        }
    },
    validateSearch: (search: ShopSearch): ShopSearch => {
        return {
            category: (search.category as string) ?? defaultShopFilter.category,
            subcategory: (search.subcategory as string[]) ?? defaultShopFilter.subcategory,
            sizes: (search.sizes as string[] | undefined) ?? defaultShopFilter.sizes,
            priceMin: Number(search.priceMin ?? defaultShopFilter.priceMin),
            priceMax: Number(search.priceMax ?? defaultShopFilter.priceMax),
            name: search.name?.trim() ? search.name : defaultShopFilter.name,
            page: search.page ?? defaultShopFilter.page,
            count: search.count ?? defaultShopFilter.count
        }
    },
})

function Component() {
    const {productsDeferred} = Route.useLoaderData()
    const search = Route.useSearch()
    const navigate = Route.useNavigate()

    const filters = {
        category: search.category,
        sizes: search.sizes,
        subcategory: search.subcategory,
        priceMin: search.priceMin,
        priceMax: search.priceMax,
        name: search.name
    }

    const updateFilters = (patch: Partial<typeof search>) => {
        navigate({
            search: (prev) => ({
                ...prev,
                ...patch,
            })
        })
    }

    return (
        <Main>
            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Header Section */}
                <motion.div
                    className="text-left mb-15"
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                >
                    <h1 className="font-serif text-4xl md:text-5xl">Curated Finds</h1>
                    <p className="text-muted-foreground text-sm mt-2">
                        Thrifted, vintage, and one-of-a-kind pieces
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-7 gap-10">
                    {/* Filter Sidebar */}
                    <motion.div
                        className="lg:col-span-2"
                        initial={{opacity: 0, x: -30}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.5, delay: 0.1}}
                    >
                        <ShopFilters filters={filters} onApply={updateFilters}/>
                    </motion.div>

                    {/* Products Grid Section */}
                    <div className="lg:col-span-5">
                        <Suspense fallback={<motion.div
                            className="grid grid-cols-2 lg:grid-cols-3 gap-6 w-full"
                            initial="hidden"
                            whileInView="show"
                            viewport={{once: true, amount: 0.2}}
                        >
                            {[...Array(4)].map((_, i) => (
                                <ShopSkeleton key={i}/>
                            ))}
                        </motion.div>}>
                            <Await promise={productsDeferred}>
                                {(products) => {
                                    if (filters.name && products.length === 1 && products[0].sku.toLowerCase() === filters.name.toLowerCase()) {
                                        navigate({
                                            to: '/products/$product',
                                            params: {product: products[0].id},
                                            replace: true
                                        })
                                        return <motion.div
                                            className="grid grid-cols-2 lg:grid-cols-3 gap-6  w-full"
                                            initial="hidden"
                                            whileInView="show"
                                            viewport={{once: true, amount: 0.2}}
                                        >
                                            {[...Array(4)].map((_, i) => (
                                                <ShopSkeleton key={i}/>
                                            ))}
                                        </motion.div>
                                    }

                                    if (products.length === 0) {
                                        return (
                                            <motion.div
                                                className="flex flex-col items-center justify-center py-20 text-center border border-dashed border-border rounded-xl bg-muted/20"
                                                initial={{opacity: 0, scale: 0.95}}
                                                animate={{opacity: 1, scale: 1}}
                                                transition={{duration: 0.4}}
                                            >
                                                <h3 className="text-lg font-medium text-foreground">No products
                                                    found</h3>
                                                <p className="mt-2 text-sm text-muted-foreground max-w-md">
                                                    We couldn't find anything matching your filters. Try adjusting
                                                    category, price range, or style.
                                                </p>
                                                <motion.div whileHover={{scale: 1.02}}>
                                                    <Button
                                                        onClick={() => navigate({
                                                            search: defaultShopFilter,
                                                            replace: true,
                                                        })}
                                                        className="mt-6"
                                                    >
                                                        Reset Filters
                                                    </Button>
                                                </motion.div>
                                            </motion.div>
                                        )
                                    }

                                    return (
                                        <motion.div
                                            className="grid grid-cols-2 lg:grid-cols-3 gap-6"
                                            initial="hidden"
                                            whileInView="show"
                                            viewport={{once: true, amount: 0.2}}
                                        >
                                            {products.map((product, i) => (
                                                <motion.div key={product.id} variants={fadeUp} custom={i}>
                                                        <ProductCard product={product}/>
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    )
                                }}
                            </Await>
                        </Suspense>
                    </div>
                </div>
            </div>
        </Main>
    )
}