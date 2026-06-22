'use client'
import {Heart, ShoppingCart} from 'lucide-react'
import {useCartStore, useWishlistStore} from '#/lib/store'
import React, {useState} from 'react'
import type {Product} from "#/lib/types.ts";
import {Link} from "@tanstack/react-router";
import clsx from "clsx";
import {Badge} from "@components/ui";
import {motion} from "framer-motion";
import {toast} from "#/lib/utils.ts";

interface ProductCardProps {
    product: Product
}

export const ProductCard = React.memo(({product}: ProductCardProps) => {
    const {addItem, cart, removeItem} = useCartStore()
    const {addList, wishlist, removeList} = useWishlistStore()
    const [showAddedMessage, setShowAddedMessage] = useState<boolean>(false)
    const [messageText, setMessageText] = useState<string>('')

    const isAlreadyAddedToCart = cart.items.find(
        (item) => item.productId === product.id
    )
    const isAlreadyAddedToList = wishlist.find(
        (item) => item.id === product.id
    )

    const handleCartItem = (e: React.MouseEvent) => {
        e.preventDefault()

        if (!isAlreadyAddedToCart) {
            addItem(product)
            setMessageText("Added to Cart")
            toast.success(
                "Added to Cart",
                product.name
            )
        } else {
            removeItem(product.id)
            setMessageText("Removed from Cart")
            toast.info(
                "Removed from Cart",
                product.name
            )
        }

        setShowAddedMessage(true)
        setTimeout(() => setShowAddedMessage(false), 2000)
    }

    const handleWishItem = (e: React.MouseEvent) => {
        e.preventDefault()

        if (!isAlreadyAddedToList) {
            addList(product)

            setMessageText("Added to Wishlist")
            toast.success(
                "Added to Wishlist",
                product.name
            )
        } else {
            removeList(product.id)

            setMessageText("Removed from Wishlist")
            toast.info(
                "Removed from Wishlist",
                product.name
            )
        }

        setShowAddedMessage(true)
        setTimeout(() => setShowAddedMessage(false), 2000)
    }

    const discountPercent = product.compareAtPrice
        ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
        : 0

    return (
        <motion.div
            initial={{opacity: 0, y: 25}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.2}}
            transition={{duration: 0.5}}
            whileHover={{y: -1}}
        >
            <Link
                to="/products/$product"
                state={{product: product}}
                params={{product: product.id}}
                disabled={showAddedMessage}
            >

                <div className="group relative cursor-pointer">

                    {/* IMAGE */}
                    <div className="relative aspect-square bg-muted rounded-xl overflow-hidden mb-2 shadow-sm">

                        <img
                            src={product.image}
                            alt={product.name}
                            className={clsx(
                                "w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105",
                                !product.inStock && "opacity-70 grayscale-[0.2]"
                            )}
                        />

                        {/* BADGES */}
                        <div className="absolute top-2 left-2 flex gap-1">
                            {!product.inStock && (
                                <span
                                    className="bg-destructive text-destructive-foreground px-2 py-0.5 rounded text-[12px]">
                            Out of Stock
                        </span>
                            )}
                            {discountPercent > 0 && (
                                <Badge variant="danger">-{discountPercent}%</Badge>
                            )}
                        </div>
                        {/* bottom actions */}
                        <motion.div
                            className="absolute bottom-2 left-2 flex items-center gap-2"
                            whileHover={{scale: 1.05}}
                        >
                            {/* cart */}
                            <motion.button
                                whileTap={{scale: 0.9}}
                                onClick={handleCartItem}
                                disabled={!product.inStock}
                                className={'p-2 cursor-pointer rounded-full bg-background/80 backdrop-blur-sm disabled:opacity-50'}
                            >
                                <ShoppingCart className={clsx("w-4.5 h-4.5 text-foreground"
                                    , isAlreadyAddedToCart ? 'fill-primary! text-primary!' : 'text-foreground')}
                                />
                            </motion.button>

                            {/* wishlist */}
                            <motion.button
                                whileTap={{scale: 0.9}}
                                onClick={(e) => {
                                    e.preventDefault()
                                    handleWishItem(e)
                                }}
                                className="p-2 cursor-pointer rounded-full bg-background/80 backdrop-blur-sm"
                            >
                                <Heart
                                    className={`w-4.5 h-4.5 ${
                                        isAlreadyAddedToList ? 'fill-red-500 text-red-500' : 'text-foreground'
                                    }`}
                                />
                            </motion.button>
                        </motion.div>
                        {/* feedback overlay */}
                        {showAddedMessage && (
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div
                                    className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-black/40 to-transparent pointer-events-none"/>
                                <Badge>
                                    {messageText}
                                </Badge>
                            </div>
                        )}

                    </div>
                    {/* INFO (compact) */}
                    <div className="space-y-1">

                        <h3 className="text-sm font-medium line-clamp-2 group-hover:text-sage-green">
                            {product.name}
                        </h3>

                        <div className="flex items-center gap-2 text-xs">
                            <span className="text-muted-foreground">Condition</span>
                            <Badge size="sm" variant={
                                product.condition === "New" ? "success" :
                                    product.condition === "Like New" ? "info" :
                                        product.condition === "Good" ? "info" :
                                            product.condition === "Fair" ? "warning" : "danger"
                            }>
                                {product.condition}
                            </Badge>
                        </div>

                        {/* price */}
                        <div className="flex items-center gap-2">
                        <span className="font-bold text-sage-green text-sm">
                            ₱{product.price.toFixed(2)}
                        </span>
                            {product.compareAtPrice && (
                                <span className="text-xs line-through text-muted-foreground">
                                ₱{product.compareAtPrice.toFixed(2)}
                            </span>
                            )}
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    )
})