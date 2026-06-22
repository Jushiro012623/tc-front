import {create} from 'zustand'
import {persist} from 'zustand/middleware'
import type {AuthStore, Cart, CartItem, CartStore, Product, UIStore, WishListStore} from "#/lib/types.ts";

const defaultCart: Cart = {
    items: [],
    subtotal: 0,
    tax: 0,
    shipping: 0,
    total: 0,
}

const defaultWIshlist: Product[] = []

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

            setDarkMode: (value) => set({isDarkMode: value}),
        }),
        {
            name: "theme",
        }
    )
)

export const useWishlistStore = create<WishListStore>()(
    persist(
        (set) => ({
            wishlist: defaultWIshlist,
            addList: (product) => set((state) => {
                const existingItem = state.wishlist.find((item) => item.id === product.id)

                let newItems: Product[]
                if (existingItem) {
                    newItems = state.wishlist.map((item) =>
                        item.id === product.id ? {...item} : item
                    )
                } else {
                    const newItem: Product = {
                        ...product,
                    }
                    newItems = [...state.wishlist, newItem]
                }

                return {
                    wishlist: newItems
                }
            }),
            removeList: (productId) => set((state) => {
                const newItems = state.wishlist.filter((item) => item.id !== productId)
                return {
                    wishlist: newItems,
                }
            }),
            clearList: () =>
                set({
                    wishlist: defaultWIshlist,
                }),
        }),
        {
            name: 'wish-list'
        }
    )
)
