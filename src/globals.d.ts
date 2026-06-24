import * as React from "react";

declare global {
    type ShopSearch = {
        category: string;
        subcategory: string[];
        sizes: string[];
        priceMin: number;
        priceMax: number;
        name?: string;
        count: number;
        page: number;
    };

    type SVGProps = React.SVGProps<SVGSVGElement>;

}

export {};
