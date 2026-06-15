'use client'
import {Heart, ShoppingCart} from 'lucide-react'
import {useCartStore} from '#/lib/store'
import {useState} from 'react'
import type {Product} from "#/lib/types.ts";
import {Link} from "@tanstack/react-router";
import {Button} from "@components/ui";

interface ProductCardProps {
    product: Product
}

export function ProductCard({product}: ProductCardProps) {
    const {addItem, cart, removeItem} = useCartStore()
    const [isWishlisted, setIsWishlisted] = useState(false)
    const [showAddedMessage, setShowAddedMessage] = useState(false)
    const [messageText, setMessageText] = useState<string>('')

    const isAlreadyAddedToCard = cart.items.find(
        (item) => item.productId === product.id
    )

    const handleCartItem = (e: React.MouseEvent) => {
        e.preventDefault()

        if (!isAlreadyAddedToCard) {
            addItem(product, 1)
            setMessageText('Added to Cart')
        } else {
            removeItem(product.id)
            setMessageText('Removed from Cart')
        }

        setShowAddedMessage(true)
        setTimeout(() => setShowAddedMessage(false), 1500)
    }

    const discountPercent = product.compareAtPrice
        ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
        : 0

    return (
        <Link to="/products/$product" params={{product: product.id}}>
            <div className="group relative cursor-pointer">

                {/* IMAGE */}
                <div className="relative aspect-square bg-light-gray rounded-xl overflow-hidden mb-2">

                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* BADGES */}
                    <div className="absolute top-2 left-2 flex gap-1">
                        {!product.inStock && (
                            <span className="bg-red-500 text-white px-2 py-0.5 rounded text-[10px]">
                            Out
                        </span>
                        )}
                        {discountPercent > 0 && (
                            <span className="bg-primary text-white px-2 py-0.5 rounded text-[10px]">
                            -{discountPercent}%
                        </span>
                        )}
                    </div>

                    {/* wishlist */}
                    <button
                        onClick={(e) => {
                            e.preventDefault()
                            setIsWishlisted(!isWishlisted)
                        }}
                        className="absolute top-2 right-2 p-1.5 bg-white/80 rounded-full"
                    >
                        <Heart
                            className={`w-5 h-5 ${
                                isWishlisted ? 'fill-red-500 text-red-500' : ''
                            }`}
                        />
                    </button>
                    <div
                        className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-black/70 via-black/30 to-transparent pointer-events-none"/>

                    {/* ADD TO CART CTA (NEW) */}
                    <Button
                        onClick={handleCartItem}
                        disabled={!product.inStock}
                        className="absolute bottom-2 left-2 right-2"
                        variant="glass"
                    >
                        <ShoppingCart className="w-3.5 h-3.5"/>
                        {isAlreadyAddedToCard ? "Remove" : "Add to Cart"}
                    </Button>

                    {/* feedback overlay */}
                    {showAddedMessage && (
                        <div
                            className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-xs">
                            {messageText}
                        </div>
                    )}
                </div>
                {/* INFO (compact) */}
                <div className="space-y-1">

                    <h3 className="text-sm font-medium line-clamp-2 group-hover:text-sage-green">
                        {product.name}
                    </h3>

                    {/* rating (smaller) */}
                    <div className="flex items-center gap-1 text-xs">
                        <span className="text-amber-500">★</span>
                        <span className="text-muted-foreground">
                            {product.rating} ({product.reviews})
                        </span>
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