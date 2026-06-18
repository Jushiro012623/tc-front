import {Heart, Leaf, Zap} from "lucide-react";

export const NavLinks = [
    {
        href: "/shop",
        label: "Shop"
    },
    {
        href: "/new-arrivals",
        label: "New Arrivals"
    },
    {
        href: "/about",
        label: "About"
    },
    {
        href: "/sustainability",
        label: "Sustainability"
    },
    {
        href: "/contact",
        label: "Contact"
    },
]

export const values = [
    {
        title: "Sustainability",
        description:
            "We promote responsible fashion by extending the life of pre-loved clothing.",
    },
    {
        title: "Community",
        description:
            "We create a welcoming space where people can discover, share, and celebrate unique styles.",
    },
    {
        title: "Accessibility",
        description:
            "We believe everyone deserves access to quality fashion at prices that make sense.",
    },
]
export const defaultShopFilter = {
    category: 'All',
    style: 'All',
    sizes: [],
    priceMin: 0,
    priceMax: 300,
    name: undefined
}
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