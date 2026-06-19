import { type Variants } from "framer-motion";

export const fadeUp: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    show: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.3,
            duration: 0.6,
        },
    }),
};

export const staggerContainer: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};