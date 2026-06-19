import {createFileRoute} from '@tanstack/react-router'
import {Button, Main} from '@components/ui'
import {fetchProducts} from '#/lib/products'
import {ProductCard} from '@components/products/product-card'
import {useEffect, useMemo} from 'react'
import {ShopFilters} from "@components/layouts";
import {Loader} from "@components/layouts/loader.tsx";
import type {ShopSearch} from "#/lib/types.ts";
import {motion} from "framer-motion";
import {fadeUp} from "#/lib/framer-motion.ts";

export const Route = createFileRoute('/shop')({
    component: Component,
    head: () => ({
        meta: [
            {title: `Shop | Triumphs Co.`}
        ]
    }),
    loader: async () => {
        return fetchProducts()
    },
    validateSearch: (search: ShopSearch) => {
        return {
            category: (search.category as string) ?? 'All',
            style: (search.style as string) ?? 'All',
            sizes: (search.sizes as string[] | undefined) ?? [],
            priceMin: Number(search.priceMin ?? 0),
            priceMax: Number(search.priceMax ?? 300),
            name: search.name?.trim() ? search.name : undefined,
        }
    },
    pendingMs: 0,
    pendingComponent: Loader,
})

function Component() {
    const products = Route.useLoaderData()
    const search = Route.useSearch()
    const navigate = Route.useNavigate()

    const filters = {
        category: search.category,
        sizes: search.sizes,
        style: search.style,
        price: [search.priceMin, search.priceMax] as [number, number],
        name: search.name
    }

    const updateFilters = (patch: Partial<typeof search>) => {
        navigate({
            search: (prev) => {
                return {
                    ...prev,
                    ...patch,
                }
            }
        })
    }
    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            const matchesCategory =
                filters.category === 'All' ||
                product.category.toLowerCase() === filters.category.toLowerCase()

            const matchesSizes =
                filters.sizes.length === 0 ||
                product.sizes?.some((size) => filters.sizes.includes(size))

            const matchesPrice =
                product.price >= filters.price[0] &&
                product.price <= filters.price[1]

            const matchesStyle =
                filters.style === 'All' ||
                product.subcategory
                    ?.toLowerCase()
                    .includes(filters.style.toLowerCase())

            const matchesName =
                !filters.name ||
                filters.name
                    .toLowerCase()
                    .split(/\s+/)
                    .every(
                        (term) =>
                            product.name.toLowerCase().includes(term) ||
                            product.sku.toLowerCase().includes(term)
                    )

            return (
                matchesCategory &&
                matchesSizes &&
                matchesPrice &&
                matchesStyle &&
                matchesName
            )
        })
    }, [
        products,
        search.category,
        search.sizes,
        search.style,
        search.priceMin,
        search.priceMax,
        search.name,
    ])

    useEffect(() => {
        if (!filters.name) return

        if (
            filteredProducts.length === 1 &&
            filteredProducts[0].sku.toLowerCase() === filters.name.toLowerCase()
        ) {
            navigate({
                to: '/products/$product',
                params: {
                    product: filteredProducts[0].id,
                },
                replace: true,
            })
        }
    }, [filteredProducts, filters.name, navigate])

    return (
        <Main>
            <div className="max-w-7xl mx-auto px-6 py-12">
                <motion.div
                    className="text-left mb-15"
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                >
                    <h1 className="font-serif text-4xl md:text-5xl">
                        Curated Finds
                    </h1>
                    <p className="text-muted-foreground text-sm mt-2">
                        Thrifted, vintage, and one-of-a-kind pieces
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-7 gap-10">

                    {/* --------FILTER COMPONENT-------- */}
                    <motion.div
                        className="lg:col-span-2"
                        initial={{opacity: 0, x: -30}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.5, delay: 0.1}}
                    >
                        <ShopFilters
                            filters={filters}
                            onApply={updateFilters}
                        />
                    </motion.div>

                    {/* --------PRODUCTS-------- */}
                    <div className="lg:col-span-5">
                        {filteredProducts.length === 0 ? (
                            <motion.div
                                className="flex flex-col items-center justify-center py-20 text-center border border-dashed border-border rounded-xl bg-muted/20"
                                initial={{opacity: 0, scale: 0.95}}
                                animate={{opacity: 1, scale: 1}}
                                transition={{duration: 0.4}}
                            >
                                <h3 className="text-lg font-medium text-foreground">
                                    No products found
                                </h3>

                                <p className="mt-2 text-sm text-muted-foreground max-w-md">
                                    We couldn’t find anything matching your filters. Try adjusting category, price
                                    range, or style.
                                </p>
                                <motion.div whileHover={{scale: 1.02}}>
                                    <Button
                                        onClick={() => navigate({
                                            search: {
                                                category: 'All',
                                                style: 'All',
                                                sizes: [],
                                                priceMin: 0,
                                                priceMax: 300,
                                                name: undefined
                                            },
                                            replace: true,
                                        })}
                                        className="mt-6"
                                    >
                                        Reset Filters
                                    </Button>
                                </motion.div>
                            </motion.div>
                        ) : (
                            <motion.div
                                className="lg:col-span-5 grid grid-cols-2 lg:grid-cols-3 gap-6"
                                initial="hidden"
                                whileInView="show"
                                viewport={{once: true, amount: 0.2}}
                            >
                                {filteredProducts.map((product, i) => (
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
                    </div>

                </div>
            </div>
        </Main>)
}