import { useState } from 'react'
import {Button, Input, Select, SeparatorX} from "@components/ui"

type Props = {
    onApply: (filters: {
        category: string
        sizes: string[]
        style: string
        price: [number, number]
    }) => void
}

export function ShopFilters({ onApply }: Props) {
    const categories = ['All', 'Women', 'Unisex', 'Accessories', 'Footwear']
    const sizeOptions = ['XS', 'S', 'M', 'L', 'XL']
    const styleOptions = ['All', 'Minimal', 'Vintage', 'Streetwear', 'Elegant']

    const [category, setCategory] = useState('All')
    const [sizes, setSizes] = useState<string[]>([])
    const [style, setStyle] = useState('All')
    const [price, setPrice] = useState<[number, number]>([0, 300])

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

            <SeparatorX />
            {/* CATEGORY */}
            <section className="space-y-3">
                <h3 className="text-xs uppercase tracking-wider text-muted-foreground">
                    Category
                </h3>

                <div className="flex flex-wrap gap-2">
                    {categories.map((c) => (
                        <button
                            key={c}
                            onClick={() => setCategory(c)}
                            className={`px-3 py-1.5 rounded-md text-xs border transition
                                ${category === c
                                ? "bg-primary text-background border-primary"
                                : "bg-transparent hover:bg-muted border-border text-muted-foreground"
                            }`}
                        >
                            {c}
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
                                setSizes((prev) =>
                                    prev.includes(size)
                                        ? prev.filter((s) => s !== size)
                                        : [...prev, size]
                                )
                            }
                            className={`h-9 w-9 rounded-md border text-xs transition
                                ${sizes.includes(size)
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
                        value={price[0]}
                        onChange={(e) =>
                            setPrice([Number(e.target.value), price[1]])
                        }
                        placeholder="Min"
                    />

                    <Input
                        type="number"
                        size="sm"
                        value={price[1]}
                        onChange={(e) =>
                            setPrice([price[0], Number(e.target.value)])
                        }
                        placeholder="Max"
                    />
                </div>

                <div className="text-[11px] text-muted-foreground">
                    Budget in PHP / USD equivalent
                </div>
            </section>

            {/* STYLE */}
            <section className="space-y-3">
                <h3 className="text-xs uppercase tracking-wider text-muted-foreground">
                    Style
                </h3>

                <Select
                    value={style}
                    onChange={(e) => setStyle(e.target.value)}
                >
                    {styleOptions.map((s) => (
                        <option key={s} value={s}>
                            {s}
                        </option>
                    ))}
                </Select>
            </section>

            {/* APPLY */}
            <div className="pt-2">
                <Button
                    onClick={() =>
                        onApply({ category, sizes, style, price })
                    }
                    className="w-full h-11"
                >
                    Apply Filters
                </Button>

                <Button
                    onClick={() => {
                        setCategory('All')
                        setSizes([])
                        setStyle('All')
                        setPrice([0, 300])
                    }}
                    variant="muted"
                    className="w-full mt-2 text-xs text-muted-foreground hover:text-foreground transition"
                >
                    Reset filters
                </Button>
            </div>
        </aside>
    )
}