import {createFileRoute, notFound, useParams} from '@tanstack/react-router'
import {Badge, Button, Main, Chip} from "@components/ui";
import {ArrowLeft} from "lucide-react";
import {NotFound} from "@components/layouts";
import {useCartStore, useWishlistStore} from "#/lib/store.ts";
import {Loader} from "@components/layouts/loader.tsx";
import {fetchProduct} from "#/lib/products.ts";
import type {Product} from "#/lib/types.ts";
import {motion} from 'framer-motion'

export const Route = createFileRoute('/products/$product')({
    component: RouteComponent,
    head: ({params}) => ({
        meta: [
            {title: `Product ${params.product} | Triumphs Co.`}
        ]
    }),
    pendingMs: 0,
    pendingComponent: Loader,
    loader: async ({params, location}) => {
        const stateProduct = location.state?.product

        if (stateProduct) {
            return stateProduct
        }
        const product = await fetchProduct(params.product)

        if (!product) throw notFound()

        return product
    },
    notFoundComponent: NotFound
})

function RouteComponent() {
    const {product: id} = useParams({from: '/products/$product'})

    const product: Product = Route.useLoaderData()

    const {addItem, removeItem} = useCartStore()
    const {addList, removeList, wishlist} = useWishlistStore()

    const isAlreadyAddedToList = wishlist.find(
        (item) => item.id === product.id
    )
    const isAlreadyAddedToCard = useCartStore((s) => {
        return s.cart.items.some(i => i.productId === id)
    })

    return (
        <Main>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.3}}
                className="max-w-6xl mx-auto px-6 py-10">
                <Button
                    variant="muted"
                    className="flex items-center gap-2 w-fit mb-6"
                    onClick={() => window.history.back()}
                >
                    <ArrowLeft size={16}/>
                    Back
                </Button>

                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-10"
                    initial="hidden"
                    animate="show"
                    variants={{
                        hidden: {},
                        show: {
                            transition: {
                                staggerChildren: 0.08,
                                delayChildren: 0.05
                            }
                        }
                    }}
                >
                    <motion.div className="w-full"
                                variants={{
                                    hidden: {opacity: 0, y: 20},
                                    show: {opacity: 1, y: 0}
                                }}
                                transition={{duration: 0.4, ease: "easeOut"}}
                    >
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
                    </motion.div>
                    <motion.div
                        variants={{
                            hidden: {opacity: 0, y: 20},
                            show: {opacity: 1, y: 0}
                        }}
                        className="flex flex-col gap-6"
                        transition={{duration: 0.4, ease: "easeOut"}}
                    >
                        <div>
                            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                                {product.category} / {product.subcategory}
                            </p>

                            <h1 className="font-serif text-4xl font-medium mt-2 leading-tight">
                                {product.name}
                            </h1>

                            <p className="text-muted-foreground mt-3 leading-relaxed">
                                {product.description}
                            </p>
                        </div>

                        {/* PRICE + CONDITION ROW */}
                        <div className="flex items-center gap-5">

                            <div className="flex items-end gap-3">
                                <p className="text-3xl font-semibold text-foreground">
                                    ${product.price.toFixed(2)}
                                </p>

                                {product.compareAtPrice && (
                                    <p className="text-muted-foreground line-through text-sm">
                                        ${product.compareAtPrice.toFixed(2)}
                                    </p>
                                )}
                            </div>

                            <Badge variant={
                                product.condition === "New" ? "success" :
                                    product.condition === "Like New" ? "info" :
                                        product.condition === "Good" ? "info" :
                                            product.condition === "Fair" ? "warning" : "danger"
                            }>
                                {product.condition}
                            </Badge>
                        </div>

                        {/* META INFO */}
                        <div className="flex flex-col gap-2 text-sm text-muted-foreground border-t border-border pt-4">
                            <p><span className="text-foreground font-medium">Material</span>: {product.material}</p>
                            <p><span className="text-foreground font-medium">Care</span>: {product.careInstructions}</p>
                            <p><span className="text-foreground font-medium">SKU</span>: {product.sku}</p>
                        </div>

                        {/* VARIANTS */}
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm font-medium mb-2 ">Best Fit</p>
                                <div className="flex flex-wrap gap-2">
                                    {product.sizes?.map((size) => (
                                        <Chip key={size} size="lg" variant="muted" className="rounded-md">
                                            {size} Fit
                                        </Chip>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <p className="text-sm font-medium mb-2">Color</p>
                                <div className="flex flex-wrap gap-2">
                                    {product.colors?.map((color) => (
                                        <Chip key={color} size="lg" variant="muted" className="rounded-md">
                                            {color}
                                        </Chip>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* ACTIONS (more premium spacing) */}
                        <div className="flex gap-3 pt-2">

                            <Button
                                className="w-full h-11"
                                onClick={() => {
                                    isAlreadyAddedToCard ? removeItem(id) : addItem(product)
                                }}
                            >
                                {isAlreadyAddedToCard ? "Remove from Cart" : "Add to Cart"}
                            </Button>

                            <Button
                                variant="muted"
                                className="w-full h-11"
                                onClick={() => {
                                    isAlreadyAddedToList ? removeList(id) : addList(product)
                                }}
                            >
                                {isAlreadyAddedToList ? "Wishlisted" : "Add to Wishlist"}
                            </Button>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </Main>
    )
}
