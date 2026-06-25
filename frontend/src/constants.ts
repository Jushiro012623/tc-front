import {Heart, Leaf, Zap, Mail, Phone, MapPin, Clock,} from "lucide-react";

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

export const FAQ = [
    {
        q: "Are all items second-hand?",
        a: "Yes. Every item is carefully curated pre-loved clothing.",
    },
    {
        q: "Do you accept returns?",
        a: "All sales are final unless the item is defective.",
    },
    {
        q: "How often do you restock?",
        a: "We restock weekly with new thrift finds.",
    },
    {
        q: "Can I reserve items?",
        a: "Yes, reservations are allowed for a limited time depending on availability.",
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
export const contactDetails = [
    {
        label: "Email",
        value: "triumph.co@gmail.com",
        note: "We reply within 24 hours",
        icon: Mail,
    },
    {
        label: "Phone",
        value: "+63 912 345 6789",
        note: "Available Mon - Sat",
        icon: Phone,
    },
    {
        label: "Location",
        value: "Quezon City, Philippines",
        note: "Visit us for curated thrift finds",
        icon: MapPin,
    },
    {
        label: "Store Hours",
        value: "Mon - Sat: 10:00 AM - 7:00 PM",
        note: "Sunday: Closed",
        icon: Clock,
    },
]
export const commitments = [
    {
        title: "Extending Garment Life",
        description:
            "We carefully curate pre-loved clothing to keep wearable garments in use for longer.",
    },
    {
        title: "Reducing Textile Waste",
        description:
            "Every thrifted purchase helps reduce the demand for unnecessary production and keeps clothing out of landfills.",
    },
    {
        title: "Encouraging Conscious Shopping",
        description:
            "We promote thoughtful purchasing by offering unique pieces that customers truly value and wear.",
    },
    {
        title: "Building a Sustainable Community",
        description:
            "We aim to inspire more people to embrace second-hand fashion and make responsible style choices.",
    },
]

export const defaultShopFilter: ShopSearch = {
    category: 'All',
    subcategory: [],
    sizes: [],
    priceMin: 0,
    priceMax: 2000,
    name: undefined,
    page: 1,
    count: 40
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