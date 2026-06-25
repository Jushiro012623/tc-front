import React from 'react'
import {Button, Input, SeparatorX} from "@components/ui"
import {defaultShopFilter} from "#/constants.ts";

type Props = {
    filters: {
        category: string
        subcategory: string[]
        sizes: string[]
        priceMin: number
        priceMax: number
    }
    onApply: (patch: any) => void
}

const categories = ['All', 'Women', 'Men', 'Kids', 'Unisex']
const sizeOptions = ['XS', 'S', 'M', 'L', 'XL']
const subcategoryOptions = ['Select Subcategory', 'Footwear', 'Accessories', 'Tops', 'Bottoms', 'Outerwear', 'Dresses']

export const ShopFilters = React.memo(({filters, onApply}: Props) => {

    const [draft, setDraft] = React.useState(filters)

    React.useEffect(() => {
        setDraft(filters)
    }, [filters])

    return (
        <aside className="sticky top-24 h-fit rounded-xl shadow-sm bg-muted/20 backdrop-blur-md p-5 space-y-8">
            {/* HEADER */}
            <div>
                <h2 className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                    Filters
                </h2>
                <p className="text-lg font-medium mt-1">
                    Refine your finds
                </p>
            </div>

            <SeparatorX/>
            {/* CATEGORY */}
            <section className="space-y-3">
                <h3 className="text-xs uppercase tracking-wider text-muted-foreground">
                    Category
                </h3>

                <div className="flex flex-wrap gap-2">
                    {categories.map((c) => (
                        <button
                            key={c}
                            onClick={() =>
                                setDraft(prev => ({...prev, category: c}))
                            }
                            className={`px-3 py-1.5 rounded-md text-xs border transition
                                ${draft.category === c
                                ? "bg-primary text-background border-primary"
                                : "bg-transparent hover:bg-muted border-border text-muted-foreground"
                            }`}
                        >
                            {c}
                        </button>
                    ))}
                </div>
            </section>

            {/* SUBCATEGORY */}
            <section className="space-y-3">
                <h3 className="text-xs uppercase tracking-wider text-muted-foreground">
                    Subcategory
                </h3>
                <div className="flex flex-wrap gap-2">
                    {subcategoryOptions.slice(1).map((sub) => (
                        <button
                            key={sub}
                            onClick={() =>
                                setDraft(prev => ({
                                    ...prev,
                                    subcategory: prev.subcategory.includes(sub)
                                        ? prev.subcategory.filter(s => s !== sub)
                                        : [...prev.subcategory, sub],
                                }))
                            }
                            className={`px-3 py-1.5 rounded-md text-xs border transition ${
                                draft.subcategory.includes(sub)
                                    ? "bg-primary text-background border-primary"
                                    : "bg-transparent hover:bg-muted border-border text-muted-foreground"
                            }`}
                        >
                            {sub}
                        </button>
                    ))}
                </div>
            </section>
            {/* SIZES */}
            <section className="space-y-3">
                <h3 className="text-xs uppercase tracking-wider text-muted-foreground">
                    Sizes
                </h3>

                <div className="flex flex-wrap gap-2">
                    {sizeOptions.map((size) => (
                        <button
                            key={size}
                            onClick={() =>
                                setDraft(prev => ({
                                    ...prev,
                                    sizes: prev.sizes.includes(size)
                                        ? prev.sizes.filter(s => s !== size)
                                        : [...prev.sizes, size],
                                }))
                            }
                            className={`h-9 w-9 rounded-md border text-xs transition
                                ${draft.sizes.includes(size)
                                ? "bg-primary text-background border-primary"
                                : "border-border text-muted-foreground hover:bg-muted"
                            }`}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </section>

            {/* PRICE */}
            <section className="space-y-3">
                <h3 className="text-xs uppercase tracking-wider text-muted-foreground">
                    Price Range
                </h3>

                <div className="grid grid-cols-2 gap-2">
                    <Input
                        type="number"
                        size="sm"
                        value={draft.priceMin}
                        onChange={(e) =>
                            setDraft(prev => ({
                                ...prev,
                                priceMin: Number(e.target.value),
                            }))
                        }
                        placeholder="Min"
                    />

                    <Input
                        type="number"
                        size="sm"
                        value={draft.priceMax}
                        onChange={(e) =>
                            setDraft(prev => ({
                                ...prev,
                                priceMax: Number(e.target.value),
                            }))
                        }
                        placeholder="Max"
                    />
                </div>

                <div className="text-[11px] text-muted-foreground">
                    Budget in PHP / USD equivalent
                </div>
            </section>
            {/* APPLY */}
            <div className="pt-2">
                <Button
                    onClick={(e) => {
                        e.preventDefault()
                        onApply(draft)
                    }
                    }
                    className="w-full h-11"
                >
                    Apply Filters
                </Button>
                <Button
                    onClick={() => {
                        setDraft(filters)
                        onApply(defaultShopFilter)
                    }}
                    variant="muted"
                    className="w-full mt-2 text-xs text-muted-foreground hover:text-foreground transition"
                >
                    Reset filters
                </Button>
            </div>
        </aside>
    )
})