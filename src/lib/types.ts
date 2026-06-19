// Product Types
export interface Product {
    id: string
    name: string
    description: string
    price: number
    compareAtPrice?: number
    image: string
    images: string[]
    category: string
    subcategory?: string
    sizes?: string[]
    colors?: string[]
    material?: string
    careInstructions?: string
    inStock: boolean
    inventory: number
    condition: string
    sku: string
    createdAt: Date
}

export interface Category {
    id: string
    name: string
    slug: string
    description?: string
    image?: string
    subcategories?: Category[]
}

// Cart Types
export interface CartItem {
    id: string
    productId: string
    product: Product
}

export interface Cart {
    items: CartItem[]
    subtotal: number
    tax: number
    shipping: number
    total: number
}

// Order Types
export interface OrderItem {
    id: string
    productId: string
    product: Product
    quantity: number
    price: number
    selectedSize?: string
    selectedColor?: string
}

export interface Order {
    id: string
    orderNumber: string
    userId: string
    items: OrderItem[]
    subtotal: number
    tax: number
    shipping: number
    total: number
    status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
    shippingAddress: Address
    billingAddress: Address
    paymentMethod: string
    trackingNumber?: string
    createdAt: Date
    updatedAt: Date
}

// Address Types
export interface Address {
    id: string
    firstName: string
    lastName: string
    email: string
    phone: string
    street: string
    city: string
    state: string
    zipCode: string
    country: string
    isDefault?: boolean
}

// User Types
export interface User {
    id: string
    email: string
    firstName: string
    lastName: string
    phone?: string
    avatar?: string
    addresses: Address[]
    createdAt: Date
    updatedAt: Date
}

// Wishlist Types
export interface WishlistItem {
    id: string
    userId: string
    productId: string
    product: Product
    addedAt: Date
}

// Review Types
export interface Review {
    id: string
    productId: string
    userId: string
    rating: number
    title: string
    comment: string
    images?: string[]
    helpful: number
    createdAt: Date
    updatedAt: Date
}

// Filter Types
export interface ProductFilters {
    categories?: string[]
    priceMin?: number
    priceMax?: number
    colors?: string[]
    sizes?: string[]
    inStock?: boolean
    sortBy?: 'newest' | 'price-asc' | 'price-desc' | 'rating' | 'popular'
}

export type ShopSearch = {
    category: string
    style: string
    sizes: string[]
    priceMin: number
    priceMax: number
    name?: string
    count: number
    page: number
}


export interface CartStore {
    cart: Cart
    addItem: (product: Product) => void
    removeItem: (productId: string) => void
    clearCart: () => void
    getTotal: () => number
}

export interface WishListStore {
    wishlist: Product[]
    addList: (wishlist: Product) => void
    removeList: (productId: string) => void
    clearList: () => void
}

export interface AuthStore {
    user: any | null
    isAuthenticated: boolean
    setUser: (user: any) => void
    logout: () => void
}

export interface UIStore {
    isDarkMode: boolean
    toggleDarkMode: () => void
    setDarkMode: (value: boolean) => void
}
