import {create} from "zustand";
import type {Product} from "#/lib/types.ts";
import {persist} from "zustand/middleware";


export interface WishListStore {
    wishlist: Product[]
    addList: (wishlist: Product) => void
    removeList: (productId: string) => void
    clearList: () => void
}

const defaultWishlist: Product[] = []

export const useWishlistStore = create<WishListStore>()(
    persist(
        (set) => ({
            wishlist: defaultWishlist,
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
                    wishlist: defaultWishlist,
                }),
        }),
        {
            name: 'wish-list'
        }
    )
)
