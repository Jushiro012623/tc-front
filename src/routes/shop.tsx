import {createFileRoute} from '@tanstack/react-router'
import {Main} from '@components/ui'
import {SAMPLE_PRODUCTS} from '#/lib/products'
import {ProductCard} from '@components/products/product-card'
import {useMemo, useState} from 'react'
import {ShopFilters} from "@components/layouts";

export const Route = createFileRoute('/shop')({
    component: Component,
    head: () => ({
        meta: [
            { title: `Shop | Triumph Co.`}
        ]
    })
})

function Component() {
    const [filters, setFilters] = useState({
        category: 'All',
        sizes: [] as string[],
        style: 'All',
        price: [0, 300] as [number, number],
    })

    const filteredProducts = useMemo(() => {
        let items = [...SAMPLE_PRODUCTS]

        if (filters.category !== 'All') {
            items = items.filter(
                (p) =>
                    p.category.toLowerCase() ===
                    filters.category.toLowerCase()
            )
        }

        if (filters.sizes.length > 0) {
            items = items.filter((p) =>
                p.sizes?.some((s) => filters.sizes.includes(s))
            )
        }

        items = items.filter(
            (p) =>
                p.price >= filters.price[0] &&
                p.price <= filters.price[1]
        )

        if (filters.style !== 'All') {
            items = items.filter((p) =>
                p.subcategory
                    ?.toLowerCase()
                    .includes(filters.style.toLowerCase())
            )
        }

        return items
    }, [filters])

    return (
        <Main>
            <div className="max-w-7xl mx-auto px-6 py-12">

                <div className="text-center mb-10">
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
                        <ShopFilters onApply={setFilters}/>
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

                                <button
                                    onClick={() => window.location.reload()}
                                    className="mt-6 px-4 py-2 text-sm rounded-md bg-primary text-white hover:opacity-90 transition"
                                >
                                    Reset Filters
                                </button>
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