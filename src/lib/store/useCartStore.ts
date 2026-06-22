import {create} from "zustand";
import type {Cart, CartItem, Product} from "#/lib/types.ts";
import {persist} from "zustand/middleware";


export interface CartStore {
    cart: Cart
    addItem: (product: Product) => void
    removeItem: (productId: string) => void
    clearCart: () => void
    getTotal: () => number
}

const defaultCart: Cart = {
    items: [],
    subtotal: 0,
    tax: 0,
    shipping: 0,
    total: 0,
}

const calculateCartTotals = (items: CartItem[]): Omit<Cart, 'items'> => {

    const subtotal = items.reduce((sum, item) => sum + item.product.price, 0)
    const tax = subtotal * 0.08 // 8% tax
    const shipping = subtotal > 100 ? 0 : 10 // Free shipping over $100
    const total = subtotal + tax + shipping

    return {subtotal, tax, shipping, total}
}

export const useCartStore = create<CartStore>()(
    persist(
        (set) => ({
            cart: defaultCart,
            addItem: (product) =>
                set((state) => {
                    const existingItem = state.cart.items.find((item) => item.productId === product.id)

                    let newItems: CartItem[]
                    if (existingItem) {
                        newItems = state.cart.items.map((item) =>
                            item.productId === product.id ? {...item} : item
                        )
                    } else {
                        const newItem: CartItem = {
                            id: `${product.id}-${Date.now()}`,
                            productId: product.id,
                            product,
                        }
                        newItems = [...state.cart.items, newItem]
                    }

                    const totals = calculateCartTotals(newItems)
                    return {
                        cart: {
                            items: newItems,
                            ...totals,
                        },
                    }
                }),

            removeItem: (productId) =>
                set((state) => {
                    const newItems = state.cart.items.filter((item) => item.productId !== productId)
                    const totals = calculateCartTotals(newItems)
                    return {
                        cart: {
                            items: newItems,
                            ...totals,
                        },
                    }
                }),
            clearCart: () =>
                set({
                    cart: defaultCart,
                }),

            getTotal: () => {
                return 0
            },
        }),
        {
            name: 'triumph-cart-store',
        }
    )
)
