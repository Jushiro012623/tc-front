import {Heart, Leaf, Zap} from "lucide-react";
import {SAMPLE_PRODUCTS} from "#/lib/products.ts";
import type {CartItem} from "#/lib/types.ts";

export const NavLinks = [
    {
        href: "/shop",
        label: "Shop"
    },
    {
        href: "/sale",
        label: "On Sale"
    },
    {
        href: "/new-arrivals",
        label: "New Arrivals"
    },
    {
        href: "/brands",
        label: "Brands"
    },
]

export const FooterLinks = [
    {
        title: 'Shop',
        links: [
            {label: 'New Arrivals'},
            {label: 'Vintage Finds'},
            {label: 'Women'},
            {label: 'Accessories'},
        ],
    },
    {
        title: 'About',
        links: [
            {label: 'Our Story'},
            {label: 'Why Thrift'},
            {label: 'Sustainability'},
        ],
    },
    {
        title: 'Help',
        links: [
            {label: 'Shipping'},
            {label: 'Returns'},
            {label: 'FAQ'},
        ],
    },
];

export const ShopBadge = [
    {
        title: "Curated Finds",
        icon: Leaf,
        color: "text-primary",
        description: "Every item is handpicked for style, condition, and uniqueness",
    },
    {
        title: "One-of-a-Kind Pieces",
        icon: Heart,
        color: "text-amber-700",
        description: "No mass production — just rare vintage and pre-loved fashion",
    },
    {
        title: "Affordable Style",
        icon: Zap,
        color: "text-primary",
        description: "Look better for less with high-quality thrifted pieces",
    }
];
export const SAMPLE_CART_ITEMS: CartItem[] = [
    {
        id: "cart-1",
        productId: SAMPLE_PRODUCTS[0].id,
        product: SAMPLE_PRODUCTS[0],
        quantity: 1,
        selectedSize: "M",
        selectedColor: "Ivory",
    },
    {
        id: "cart-2",
        productId: SAMPLE_PRODUCTS[3].id,
        product: SAMPLE_PRODUCTS[3],
        quantity: 2,
        selectedSize: "L",
        selectedColor: "Grey",
    },
    {
        id: "cart-3",
        productId: SAMPLE_PRODUCTS[6].id,
        product: SAMPLE_PRODUCTS[6],
        quantity: 1,
        selectedSize: "28",
        selectedColor: "Blue",
    },
]