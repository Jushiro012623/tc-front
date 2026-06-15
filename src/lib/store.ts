import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type {Cart, CartItem, Product} from "#/lib/types.ts";

interface CartStore {
    cart: Cart
    addItem: (product: Product, quantity: number, selectedSize?: string, selectedColor?: string) => void
    removeItem: (productId: string) => void
    updateQuantity: (productId: string, quantity: number) => void
    clearCart: () => void
    getTotal: () => number
}

interface AuthStore {
    user: any | null
    isAuthenticated: boolean
    setUser: (user: any) => void
    logout: () => void
}

interface UIStore {
    isDarkMode: boolean
    toggleDarkMode: () => void
    setDarkMode: (value: boolean) => void
}

const defaultCart: Cart = {
    items: [],
    subtotal: 0,
    tax: 0,
    shipping: 0,
    total: 0,
}

const calculateCartTotals = (items: CartItem[]): Omit<Cart, 'items'> => {
    const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
    const tax = subtotal * 0.08 // 8% tax
    const shipping = subtotal > 100 ? 0 : 10 // Free shipping over $100
    const total = subtotal + tax + shipping

    return { subtotal, tax, shipping, total }
}

export const useCartStore = create<CartStore>()(
    persist(
        (set) => ({
            cart: defaultCart,
            addItem: (product, quantity, selectedSize, selectedColor) =>
                set((state) => {
                    const existingItem = state.cart.items.find((item) => item.productId === product.id)

                    let newItems: CartItem[]
                    if (existingItem) {
                        newItems = state.cart.items.map((item) =>
                            item.productId === product.id ? { ...item, quantity: item.quantity + quantity } : item
                        )
                    } else {
                        const newItem: CartItem = {
                            id: `${product.id}-${Date.now()}`,
                            productId: product.id,
                            product,
                            quantity,
                            selectedSize,
                            selectedColor,
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

            updateQuantity: (productId, quantity) =>
                set((state) => {
                    const newItems = state.cart.items.map((item) =>
                        item.productId === productId ? { ...item, quantity } : item
                    )
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

export const useAuthStore = create<AuthStore>((set) => ({
    user: null,
    isAuthenticated: false,
    setUser: (user) =>
        set({
            user,
            isAuthenticated: !!user,
        }),
    logout: () =>
        set({
            user: null,
            isAuthenticated: false,
        }),
}))

export const useUIStore = create<UIStore>()(
    persist(
        (set) => ({
            isDarkMode: false,

            toggleDarkMode: () =>
                set((state) => ({
                    isDarkMode: !state.isDarkMode,
                })),

            setDarkMode: (value) =>
                set({
                    isDarkMode: value,
                }),
        }),
        {
            name: "dark-theme",
        }
    )
)