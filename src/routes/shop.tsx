import {createFileRoute} from '@tanstack/react-router'
import {Button, Main} from '@components/ui'
import {fetchProducts} from '#/lib/products'
import {ProductCard} from '@components/products/product-card'
import {useEffect, useMemo} from 'react'
import {ShopFilters} from "@components/layouts";
import {Loader} from "@components/layouts/loader.tsx";
import type {ShopSearch} from "#/lib/types.ts";

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

                <div className="text-left mb-15">
                    <h1 className="font-serif text-4xl md:text-5xl">
                        Curated Finds
                    </h1>
                    <p className="text-muted-foreground text-sm mt-2">
                        Thrifted, vintage, and one-of-a-kind pieces
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-7 gap-10">

                    {/* --------FILTER COMPONENT-------- */}
                    <div className="lg:col-span-2">
                        <ShopFilters
                            filters={filters}
                            onApply={updateFilters}
                        />
                    </div>

                    {/* --------PRODUCTS-------- */}
                    <div className="lg:col-span-5">
                        {filteredProducts.length === 0 ? (
                            <div
                                className="flex flex-col items-center justify-center py-20 text-center border border-dashed border-border rounded-xl bg-muted/20">
                                <h3 className="text-lg font-medium text-foreground">
                                    No products found
                                </h3>

                                <p className="mt-2 text-sm text-muted-foreground max-w-md">
                                    We couldn’t find anything matching your filters. Try adjusting category, price
                                    range, or style.
                                </p>

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
                            </div>
                        ) : (
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredProducts.map((product) => (
                                    <ProductCard key={product.id} product={product}/>
                                ))}
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </Main>)
}