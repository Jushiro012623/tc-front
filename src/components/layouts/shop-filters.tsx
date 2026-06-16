import {useState} from 'react'
import {Button, Input, Select} from "@components/ui";

type Props = {
    onApply: (filters: {
        category: string
        sizes: string[]
        style: string
        price: [number, number]
    }) => void
}

export function ShopFilters({onApply}: Props) {
    const categories = ['All', 'Women', 'Unisex', 'Accessories', 'Footwear']
    const sizeOptions = ['XS', 'S', 'M', 'L', 'XL']
    const styleOptions = ['All', 'Minimal', 'Vintage', 'Streetwear', 'Elegant']

    const [category, setCategory] = useState('All')
    const [sizes, setSizes] = useState<string[]>([])
    const [style, setStyle] = useState('All')
    const [price, setPrice] = useState<[number, number]>([0, 300])

    return (
        <aside className="space-y-8 sticky top-25 h-fit">

            {/* CATEGORY */}
            <div>
                <h3 className="text-sm font-medium mb-3">Category</h3>

                <div className="flex flex-col gap-2">
                    {categories.map((c) => (
                        <Button
                            key={c}
                            onClick={() => setCategory(c)}
                            className="justify-start"
                            variant={category === c ? "primary" : "muted"}
                        >
                            {c}
                        </Button>
                    ))}
                </div>
            </div>

            {/* SIZES */}
            <div>
                <h3 className="text-sm font-medium mb-3">Sizes</h3>

                <div className="flex flex-wrap gap-2">
                    {sizeOptions.map((size) => (
                        <Button
                            key={size}
                            onClick={() =>
                                setSizes((prev) =>
                                    prev.includes(size)
                                        ? prev.filter((s) => s !== size)
                                        : [...prev, size]
                                )
                            }
                            className="size-10"
                            variant={sizes.includes(size) ? 'primary' : "muted"}
                        >
                            {size}
                        </Button>
                    ))}
                </div>
            </div>

            {/* PRICE */}
            <div>
                <h3 className="text-sm font-medium mb-3">Price Range</h3>

                <div className="flex gap-2 items-center text-sm">
                    <Input
                        type="number"
                        size='sm'
                        value={price[0]}
                        onChange={(e) =>
                            setPrice([Number(e.target.value), price[1]])
                        }
                        placeholder="Min"
                    />

                    <span>—</span>
                    <Input
                        type="number"
                        size='sm'
                        value={price[1]}
                        onChange={(e) =>
                            setPrice([price[0], Number(e.target.value)])
                        }
                        className="w-full border border-border rounded-md px-2 py-1"
                        placeholder="Max"
                    />
                </div>
            </div>

            {/* STYLE */}
            <div>
                <h3 className="text-sm font-medium mb-3">Style</h3>

                <Select
                    value={style}
                    onChange={(e) => setStyle(e.target.value)}
                >
                    {styleOptions.map((s) => (
                        <option key={s}>{s}</option>
                    ))}
                </Select>
            </div>

            {/* APPLY */}
            <Button
                onClick={() =>
                    onApply({
                        category,
                        sizes,
                        style,
                        price,
                    })
                }
                className="w-full"
            >
                Apply Filters
            </Button>
        </aside>
    )
}
