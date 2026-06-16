'use client'
import {Heart, ShoppingCart} from 'lucide-react'
import {useCartStore, useWishlistStore} from '#/lib/store'
import {useState} from 'react'
import type {Product} from "#/lib/types.ts";
import {Link} from "@tanstack/react-router";
import clsx from "clsx";
import {Badge} from "@components/ui";

interface ProductCardProps {
    product: Product
}

export function ProductCard({product}: ProductCardProps) {
    const {addItem, cart, removeItem} = useCartStore()
    const {addList, wishlist, removeList} = useWishlistStore()
    const [showAddedMessage, setShowAddedMessage] = useState(false)
    const [messageText, setMessageText] = useState<string>('')

    const isAlreadyAddedToCard = cart.items.find(
        (item) => item.productId === product.id
    )
    const isAlreadyAddedToList = wishlist.find(
        (item) => item.id === product.id
    )

    const handleCartItem = (e: React.MouseEvent) => {
        e.preventDefault()

        if (!isAlreadyAddedToCard) {
            addItem(product)
            setMessageText('Added to Cart')
        } else {
            removeItem(product.id)
            setMessageText('Removed from Cart')
        }

        setShowAddedMessage(true)
        setTimeout(() => setShowAddedMessage(false), 2000)
    }

    const handleWishItem = (e: React.MouseEvent) => {
        e.preventDefault()

        if (!isAlreadyAddedToList) {
            addList(product)
            setMessageText('Added to Wishlist')
        } else {
            removeList(product.id)
            setMessageText('Removed from Wishlist')
        }

        setShowAddedMessage(true)
        setTimeout(() => setShowAddedMessage(false), 2000)
    }

    const discountPercent = product.compareAtPrice
        ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
        : 0

    return (
        <Link to="/products/$product" params={{product: product.id}} disabled={showAddedMessage}
        >

            <div className="group relative cursor-pointer">

                {/* IMAGE */}
                <div className="relative aspect-square bg-muted rounded-xl overflow-hidden mb-2 shadow-sm">

                    <img
                        src={product.image}
                        alt={product.name}
                        className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 
                        ${!product.inStock ? "opacity-70 grayscale-[0.2]" : ""}`}
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
                            <Badge variant="info">-{discountPercent}%</Badge>
                        )}
                    </div>
                    {/* bottom actions */}
                    <div className="absolute bottom-2 left-2 flex items-center gap-2">

                        {/* cart */}
                        <button
                            onClick={handleCartItem}
                            disabled={!product.inStock}
                            className={'p-2 cursor-pointer rounded-full bg-background/80 backdrop-blur-sm disabled:opacity-50'}
                        >
                            <ShoppingCart className={clsx("w-4.5 h-4.5 text-foreground"
                                , isAlreadyAddedToCard ? 'fill-primary! text-primary!' : 'text-foreground')}
                            />
                        </button>

                        {/* wishlist */}
                        <button
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
                        </button>
                    </div>
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

                    {/* rating (smaller) */}
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
                            ${product.price.toFixed(2)}
                        </span>

                        {product.compareAtPrice && (
                            <span className="text-xs line-through text-muted-foreground">
                                ${product.compareAtPrice.toFixed(2)}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    )
}