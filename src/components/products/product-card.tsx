'use client'
import {Heart, ShoppingCart} from 'lucide-react'
import {useCartStore} from '#/lib/store'
import {useState} from 'react'
import type {Product} from "#/lib/types.ts";
import {Link} from "@tanstack/react-router";
import {Button} from "@components/ui";
import {BiXCircle} from "react-icons/bi";

interface ProductCardProps {
    product: Product
}

export function ProductCard({product}: ProductCardProps) {
    const {addItem, cart, removeItem} = useCartStore()
    const [isWishlisted, setIsWishlisted] = useState(false)
    const [showAddedMessage, setShowAddedMessage] = useState(false)
    const [messageText, setMessageText] = useState<string>('')

    const isAlreadyAddedToCard = cart.items.find((item) => item.productId === product.id)

    const handleCartItem = (e: React.MouseEvent) => {
        e.preventDefault()

        if (!isAlreadyAddedToCard) {
            addItem(product, 1)
            setMessageText('Added to Cart')
        } else {
            removeItem(product.id)
            setMessageText('Removed to Cart')
        }
        setShowAddedMessage(true)
        setTimeout(() => setShowAddedMessage(false), 2000)
    }

    const discountPercent = product.compareAtPrice
        ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
        : 0

    return (
        <Link to="/products/$product" params={{product: product.id}}>
            <div className="group cursor-pointer relative">
                {/* Image Container */}
                <div className="relative bg-light-gray rounded-2xl overflow-hidden mb-4 aspect-square">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Badge */}
                    <div className="absolute top-3 left-3 flex gap-2">
                        {!product.inStock && (
                            <span
                                className="bg-destructive text-destructive-foreground px-3 py-1 rounded text-xs font-semibold">
                                Out of Stock
                            </span>
                        )}
                        {discountPercent > 0 && (
                            <span className="bg-primary text-muted px-3 py-1 rounded text-xs font-semibold">
                                -{discountPercent}%
                            </span>
                        )}
                    </div>

                    {/* Hover Actions */}
                    <div
                        className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/60 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <Button
                            onClick={handleCartItem}
                            className="w-full mb-2"
                            disabled={!product.inStock}
                        >
                            {isAlreadyAddedToCard ? (
                                <>
                                    <BiXCircle className="w-4 h-4"/>
                                    Remove from Cart
                                </>
                            ) : (
                                <>
                                    <ShoppingCart className="w-4 h-4"/>
                                    Add to Cart
                                </>
                            )}
                        </Button>
                        <Button
                            variant="glass"
                            onClick={(e) => {
                                e.preventDefault()
                                setIsWishlisted(!isWishlisted)
                            }}
                            className="w-full "
                        >
                            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`}/>
                            {isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}
                        </Button>
                    </div>

                    {showAddedMessage && (
                        <div
                            className="absolute inset-0 flex items-center justify-center bg-black/50 rounded text-muted font-semibold">
                            {messageText}!
                        </div>
                    )}
                </div>

                {/* Product Info */}
                <div className="space-y-2">
                    <h3 className="font-heading text-lg font-semibold text-charcoal group-hover:text-sage-green transition-colors line-clamp-2">
                        {product.name}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center gap-2 text-sm">
                        <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <span
                                    key={i}
                                    className={`text-sm ${i < Math.round(product.rating) ? 'text-amber-600' : 'text-muted-foreground'}`}
                                >
                                      ★
                                </span>
                            ))}
                        </div>
                        <span className="text-medium-gray">({product.reviews})</span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-sage-green">
                            ${product.price.toFixed(2)}
                        </span>
                        {product.compareAtPrice && (
                            <span className="text-sm text-medium-gray line-through">
                                ${product.compareAtPrice.toFixed(2)}
                            </span>
                        )}
                    </div>
                </div>

            </div>
        </Link>
    )
}