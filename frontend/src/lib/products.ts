import {type Product} from './types'

export const SAMPLE_PRODUCTS: Product[] = [
    {
        id: '15',
        name: 'Y2K Mudd Jeffrey Platform Loafer',
        description: 'Retro-inspired brown lace-up platform shoes featuring a rugged lug sole, contrast stitching, and suede panel accents.',
        price: 1125,
        compareAtPrice: 1450,
        image: '/footwear/shoes.webp',
        images: ['/footwear/shoes.webp','/footwear/shoes-1.jpg'],
        category: 'Women',
        subcategory: ['Footwear'],
        sizes: ['7', '8'],
        colors: ['Brown', 'Dark Chocolate'],
        material: 'Faux Leather/Suede',
        careInstructions: 'Wipe clean with a damp cloth',
        condition: 'Good',
        inStock: true,
        inventory: 1,
        sku: 'SKU-SHOE-015',
        createdAt: new Date('2026-06-17'),
    },
    {
        id: '16',
        name: 'Classic Black Denim Mini Skirt',
        description: 'A versatile black denim mini skirt, as seen in image_c689ce.jpg, with a clean design, classic five-pocket styling, contrast button closure, and tonal stitching.',
        price: 80,
        compareAtPrice: 100,
        image: '/skirt/skirt.png',
        images: ['/skirt/skirt.png'],
        category: 'Women',
        subcategory: ['Bottoms'],
        sizes: ['XS', 'S'],
        colors: ['Black'],
        material: 'Denim',
        careInstructions: 'Machine wash cold, tumble dry low',
        condition: 'Good',
        inStock: true,
        inventory: 1,
        sku: 'SKU-SKIRT-016',
        createdAt: new Date('2026-06-17'),
    },
    {
        id: '1',
        name: 'Striped Scoop-Neck Crop Tee',
        description: 'Blue base with multiple horizontal white stripes, scoop neck, and contrasting dark trim.',
        price: 80,
        compareAtPrice: 100,
        image: '/crops/crop-2.jpg',
        images: ['/crops/crop-2.jpg'],
        category: 'women',
        subcategory: ['Tops'],
        sizes: ['XS', 'S', 'M', 'L'],
        colors: ['Blue', 'White', 'Black'],
        material: 'Cotton Blend',
        careInstructions: 'Machine wash cold',
        condition: 'Like New',
        inStock: true,
        inventory: 32,
        sku: 'SKU-CROP-001',
        createdAt: new Date('2024-01-10'),
    },
    {
        id: '2',
        name: 'Solid Red Basic Crop Top',
        description: 'Solid bright red fabric, short sleeves, and a simple crew-style neckline.',
        price: 89,
        compareAtPrice: 100,
        image: '/crops/crop-1.jpg',
        images: ['/crops/crop-1.jpg'],
        category: 'women',
        subcategory: ['Tops'],
        sizes: ['XS', 'S', 'M'],
        colors: ['Red'],
        material: 'Cotton',
        careInstructions: 'Hand wash cold',
        condition: 'Good',
        inStock: true,
        inventory: 45,
        sku: 'SKU-CROP-002',
        createdAt: new Date('2024-01-15'),
    },
    {
        id: '3',
        name: 'Yellow Striped Scoop-Neck Crop',
        description: 'Yellow and white horizontal striped pattern, scoop neck, with dark collar/sleeve trim.',
        price: 119,
        compareAtPrice: 159,
        image: '/crops/crop-3.jpg',
        images: ['/crops/crop-3.jpg'],
        category: 'women',
        subcategory: ['Tops'],
        sizes: ['XS', 'S', 'M', 'L'],
        colors: ['Yellow', 'White', 'Black'],
        material: 'Cotton Blend',
        careInstructions: 'Machine wash cold',
        condition: 'Like New',
        inStock: true,
        inventory: 38,
        sku: 'SKU-CROP-003',
        createdAt: new Date('2024-01-18'),
    },
    {
        id: '4',
        name: 'Navy Striped Scoop-Neck Tee',
        description: 'Navy blue base with bold horizontal white stripes and a deep scoop neckline.',
        price: 129,
        compareAtPrice: 169,
        image: '/crops/crop-4.jpg',
        images: ['/crops/crop-4.jpg'],
        category: 'women',
        subcategory: ['Tops'],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Navy', 'White'],
        material: 'Cotton',
        careInstructions: 'Machine wash cold',
        condition: 'Good',
        inStock: true,
        inventory: 41,
        sku: 'SKU-CROP-004',
        createdAt: new Date('2024-01-20'),
    },
    {
        id: '5',
        name: 'Textured Knit Crop Top',
        description: 'Grey/beige knit-style fabric with an intricate repeating texture pattern.',
        price: 139,
        compareAtPrice: 189,
        image: '/crops/crop-5.jpg',
        images: ['/crops/crop-5.jpg'],
        category: 'women',
        subcategory: ['Tops'],
        sizes: ['XS', 'S', 'M', 'L'],
        colors: ['Grey', 'Beige'],
        material: 'Knit Blend',
        careInstructions: 'Hand wash recommended',
        condition: 'Fair',
        inStock: true,
        inventory: 27,
        sku: 'SKU-CROP-005',
        createdAt: new Date('2024-01-22'),
    },
    {
        id: '6',
        name: 'Green Striped Crew-Neck Crop',
        description: 'Green base with thin spaced-out horizontal white stripes.',
        price: 109,
        compareAtPrice: 149,
        image: '/crops/crop-6.jpg',
        images: ['/crops/crop-6.jpg'],
        category: 'women',
        subcategory: ['Tops'],
        sizes: ['XS', 'S', 'M'],
        colors: ['Green', 'White'],
        material: 'Cotton',
        careInstructions: 'Machine wash cold',
        condition: 'Good',
        inStock: true,
        inventory: 33,
        sku: 'SKU-CROP-006',
        createdAt: new Date('2024-01-25'),
    },
    {
        id: '7',
        name: 'Solid Brown Basic Crop Top',
        description: 'Neutral brown/tan minimalist crop top.',
        price: 85,
        compareAtPrice: 99,
        image: '/crops/crop-7.jpg',
        images: ['/crops/crop-7.jpg'],
        category: 'women',
        subcategory: ['Tops'],
        sizes: ['XS', 'S', 'M', 'L'],
        colors: ['Brown', 'Tan'],
        material: 'Cotton',
        careInstructions: 'Machine wash cold',
        condition: 'Good',
        inStock: true,
        inventory: 52,
        sku: 'SKU-CROP-007',
        createdAt: new Date('2024-01-28'),
    },
    {
        id: '8',
        name: 'Green/Cream Striped Scoop Crop',
        description: 'Dark green and cream striped scoop neck crop.',
        price: 125,
        compareAtPrice: 165,
        image: '/crops/crop-8.jpg',
        images: ['/crops/crop-8.jpg'],
        category: 'women',
        subcategory: ['Tops'],
        sizes: ['XS', 'S', 'M', 'L'],
        colors: ['Green', 'Cream', 'White'],
        material: 'Cotton Blend',
        careInstructions: 'Machine wash cold',
        condition: 'Like New',
        inStock: true,
        inventory: 36,
        sku: 'SKU-CROP-008',
        createdAt: new Date('2024-02-01'),
    },
    {
        id: '9',
        name: 'Solid Blue-Grey Crop',
        description: 'Muted blue-grey jersey crop top.',
        price: 99,
        compareAtPrice: 129,
        image: '/crops/crop-9.jpg',
        images: ['/crops/crop-9.jpg'],
        category: 'women',
        subcategory: ['Tops'],
        sizes: ['XS', 'S', 'M', 'L'],
        colors: ['Blue-Grey'],
        material: 'Jersey Cotton',
        careInstructions: 'Machine wash cold',
        condition: 'Good',
        inStock: true,
        inventory: 48,
        sku: 'SKU-CROP-009',
        createdAt: new Date('2024-02-03'),
    },
    {
        id: '10',
        name: 'Chevron Patterned Knit Crop',
        description: 'Dark grey knit crop with subtle chevron pattern.',
        price: 149,
        compareAtPrice: 199,
        image: '/crops/crop-10.jpg',
        images: ['/crops/crop-10.jpg'],
        category: 'women',
        subcategory: ['Tops'],
        sizes: ['XS', 'S', 'M', 'L'],
        colors: ['Dark Grey'],
        material: 'Knit',
        careInstructions: 'Hand wash only',
        condition: 'Fair',
        inStock: true,
        inventory: 22,
        sku: 'SKU-CROP-010',
        createdAt: new Date('2024-02-05'),
    },
    {
        id: '11',
        name: 'Striped Cream/Dark Crop Tee',
        description: 'Cream crop tee with fine dark stripes.',
        price: 119,
        compareAtPrice: 159,
        image: '/crops/crop-11.jpg',
        images: ['/crops/crop-11.jpg'],
        category: 'women',
        subcategory: ['Tops'],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Cream', 'Black'],
        material: 'Cotton Blend',
        careInstructions: 'Machine wash cold',
        condition: 'Good',
        inStock: true,
        inventory: 39,
        sku: 'SKU-CROP-011',
        createdAt: new Date('2024-02-08'),
    },
    {
        id: '12',
        name: 'Solid Mint Green Basic Crop',
        description: 'Soft mint green simple crop top.',
        price: 95,
        compareAtPrice: 119,
        image: '/crops/crop-12.jpg',
        images: ['/crops/crop-12.jpg'],
        category: 'women',
        subcategory: ['Tops'],
        sizes: ['XS', 'S', 'M'],
        colors: ['Mint Green', 'Sage'],
        material: 'Cotton',
        careInstructions: 'Machine wash cold',
        condition: 'Like New',
        inStock: true,
        inventory: 60,
        sku: 'SKU-CROP-012',
        createdAt: new Date('2024-02-10'),
    },
    {
        id: '13',
        name: 'Red/White Striped Basic Crop',
        description: 'Red and white striped crew-neck crop top.',
        price: 139,
        compareAtPrice: 139,
        image: '/crops/crop-14.jpg',
        images: ['/crops/crop-14.jpg'],
        category: 'women',
        subcategory: ['Tops'],
        sizes: ['XS', 'S', 'M', 'L'],
        colors: ['Red', 'White'],
        material: 'Cotton',
        careInstructions: 'Machine wash cold',
        condition: 'Good',
        inStock: true,
        inventory: 47,
        sku: 'SKU-CROP-013',
        createdAt: new Date('2024-02-12'),
    },
    {
        id: '14',
        name: 'Solid Dusty Pink Crop Top',
        description: 'Dusty pink minimalist crop top.',
        price: 89,
        compareAtPrice: 109,
        image: '/crops/crop-13.jpg',
        images: ['/crops/crop-13.jpg'],
        category: 'women',
        subcategory: ['Tops'],
        sizes: ['XS', 'S', 'M', 'L'],
        colors: ['Dusty Pink', 'Mauve'],
        material: 'Cotton',
        careInstructions: 'Machine wash cold',
        condition: 'Like New',
        inStock: true,
        inventory: 54,
        sku: 'SKU-CROP-014',
        createdAt: new Date('2024-02-15'),
    },

]

export const fetchProducts = async (filters: ShopSearch): Promise<Product[]> => {
    console.log("START FETCHING WITH FILTERS:", filters)

    return new Promise((resolve) => {
        setTimeout(() => {
            const filteredData = SAMPLE_PRODUCTS.filter((product) => {
                const matchesCategory =
                    filters.category === 'All' ||
                    product.category.toLowerCase() === filters.category.toLowerCase()

                const matchesSizes =
                    filters.sizes.length === 0 ||
                    product.sizes?.some((size) => filters.sizes.includes(size))

                const matchesPrice =
                    product.price >= filters.priceMin &&
                    product.price <= filters.priceMax

                const matchesSubCategory =
                    filters.subcategory.length === 0 ||
                    product.subcategory?.some((sub) => {
                        const currentSub = filters.subcategory
                        return currentSub.includes(sub)
                    })

                const matchesName =
                    !filters.name ||
                    filters.name
                        .toLowerCase()
                        .split(/\s+/)
                        .every(
                            (term) =>
                                product.name.toLowerCase().includes(term) ||
                                product.sku.toLowerCase().includes(term)
                        )
                return (
                    matchesCategory &&
                    matchesSizes &&
                    matchesPrice &&
                    matchesSubCategory &&
                    matchesName
                )
            })

            const startIndex = (Number(filters.page) - 1) * Number(filters.count)
            const endIndex = startIndex + Number(filters.count)
            const paginatedData = filteredData.slice(startIndex, endIndex)

            console.log(`DONE FETCHING. TOTAL FOUND: ${filteredData.length}. RETURNING: ${paginatedData.length} (Page ${filters.page})`)

            resolve(paginatedData)
        }, 1200)
    })
}

export const fetchProduct = async (
    id: string | number
): Promise<Product | undefined> => {
    console.log("START FETCHING")
    return new Promise((resolve) => {
        setTimeout(() => {
            const product = SAMPLE_PRODUCTS.find((p) => p.id === id)
            console.log("DONE FETCHING")
            resolve(product)
        }, 1200)
    })
}
