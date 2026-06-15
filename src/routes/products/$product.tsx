import {createFileRoute, useParams} from '@tanstack/react-router'
import {Button, Main} from "@components/ui";
import {SAMPLE_PRODUCTS} from "#/lib/products.ts";
import {ArrowLeft} from "lucide-react";
import {NotFound} from "@components/layouts";
import {useCartStore} from "#/lib/store.ts";

export const Route = createFileRoute('/products/$product')({
    component: RouteComponent,
})

function RouteComponent() {
    const {product: id} = useParams({from: '/products/$product'})

    const {cart, addItem, removeItem} = useCartStore()

    const isAlreadyAddedToCard = cart.items.find((item) => item.productId === id)

    const product = SAMPLE_PRODUCTS.find((p) => p.id === id)

    if (!product) return <NotFound/>

    return (
        <Main>
            <div className="max-w-6xl mx-auto px-6 py-10">

                <Button
                    variant="secondary"
                    className="flex items-center gap-2 w-fit mb-6"
                    onClick={() => window.history.back()}
                >
                    <ArrowLeft size={16}/>
                    Back
                </Button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                    <div className="w-full">
                        <div className="aspect-square overflow-hidden rounded-2xl border border-border">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="flex gap-3 mt-4 overflow-x-auto">
                            {product.images?.map((img, i) => (
                                <img
                                    key={i}
                                    src={img}
                                    alt={`${product.name} ${i}`}
                                    className="w-20 h-20 min-w-20 object-cover rounded-lg border border-border"
                                />
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-5">

                        <div>
                            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                                {product.category} • {product.subcategory}
                            </p>

                            <h1 className="font-serif text-4xl font-medium mt-2">
                                {product.name}
                            </h1>

                            <p className="text-muted-foreground mt-3">
                                {product.description}
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <p className="text-2xl font-medium">
                                ${product.price.toFixed(2)}
                            </p>

                            {product.compareAtPrice && (
                                <p className="text-muted-foreground line-through">
                                    ${product.compareAtPrice.toFixed(2)}
                                </p>
                            )}
                        </div>

                        <div className="text-sm text-muted-foreground space-y-1">
                            <p>Material: {product.material}</p>
                            <p>Care: {product.careInstructions}</p>
                            <p>SKU: {product.sku}</p>
                        </div>

                        <div className="space-y-4">

                            <div>
                                <p className="text-sm font-medium mb-2">Sizes</p>
                                <div className="flex flex-wrap gap-2">
                                    {product.sizes?.map((size) => (
                                        <Button
                                            key={size}
                                            className="size-10"
                                            variant={"secondary"}
                                        >
                                            {size}
                                        </Button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <p className="text-sm font-medium mb-2">Colors</p>
                                <div className="flex flex-wrap gap-2">
                                    {product.colors?.map((color) => (
                                        <Button
                                            key={color}
                                            variant={"secondary"}
                                        >
                                            {color}
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-3 pt-4">
                            <Button className="w-full" onClick={() => {
                                isAlreadyAddedToCard ? removeItem(id) : addItem(product, 1)
                            }}>
                                {isAlreadyAddedToCard ? "Remove from Cart" : "Add to Cart"}
                            </Button>

                            <Button variant="secondary" className="w-full">
                                Add to Wishlist
                            </Button>
                        </div>

                        <div className="flex items-center gap-4 text-sm pt-4">
                            <div className="flex items-center gap-1">
                                <span className="text-amber-500">★★★★★</span>
                                <span className="font-medium">
                                    {product.rating}
                                </span>
                            </div>
                            <span className="text-muted-foreground">
                                Based on {product.reviews} reviews
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Main>
    )
}
