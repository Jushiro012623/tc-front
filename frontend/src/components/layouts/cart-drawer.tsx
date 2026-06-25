import {BiX} from "react-icons/bi"
import {Button, SeparatorX} from "@components/ui"
import {Fragment} from "react"
import {useCartStore} from "#/lib/store";
import {AnimatePresence, motion} from "framer-motion";
import {Link} from "@tanstack/react-router";

interface CartDrawerProps {
    open: boolean
    onClose: () => void
}

export const CartDrawer: React.FC<CartDrawerProps> = ({open, onClose}) => {
    const {cart} = useCartStore()

    return (
        <Fragment>
            <AnimatePresence>
                {open && (
                    <motion.div
                        className="fixed inset-0 bg-black/40 z-50"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.2}}
                        onClick={onClose}
                    />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {open && (
                        <motion.aside
                            data-lenis-prevent
                            className="fixed
                                inset-0
                                sm:inset-y-2
                                sm:right-0
                                sm:left-auto
                                sm:w-105
                                bg-background
                                sm:rounded-l-2xl
                                z-50
                                flex
                                flex-col
                                overflow-hidden
                            "
                            initial={{x: "100%"}}
                            animate={{x: 0}}
                            exit={{x: "100%"}}
                            transition={{type: "tween", duration: 0.25, ease: "easeOut"}}
                        >
                            <div
                                className="flex items-center justify-between p-5 item backdrop-blur">

                                <div className="space-y-1">
                                    <h2 className="text-lg font-semibold text-foreground">
                                        Your Cart
                                    </h2>

                                    <p className="text-xs text-muted-foreground">
                                        Review your selected items before checkout
                                    </p>
                                </div>

                                <button
                                    onClick={onClose}
                                    className="p-2 rounded-md hover:bg-muted transition text-muted-foreground hover:text-foreground"
                                >
                                    <BiX size={22}/>
                                </button>
                            </div>

                            <SeparatorX/>

                            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                                {cart.items.length === 0 ? (
                                    <p className="text-muted-foreground text-sm text-center mt-10">Your cart is empty</p>
                                ) : (
                                    cart.items.map(({product, id}, index) => {
                                        const isLastItem = index === cart.items.length - 1
                                        const {image, name, sku, price} = product
                                        return (
                                            <Fragment key={id}>
                                                <Link
                                                    to={`/products/$product`}
                                                    state={{product: product}}
                                                    params={{product: product.id}}
                                                    onClick={onClose}
                                                    className="flex gap-3 items-center justify-center">
                                                    <img
                                                        src={image}
                                                        alt={name}
                                                        className="w-14 h-14 bg-muted rounded-md object-cover"
                                                    />
                                                    <div className="flex-1">
                                                        <p className="text-sm font-medium">{name}</p>
                                                        <p className="text-xs text-muted-foreground">{sku}</p>
                                                    </div>
                                                    <p className="text-sm font-medium">
                                                        ${(price).toFixed(2)}
                                                    </p>
                                                </Link>
                                                {!isLastItem && <SeparatorX/>}
                                            </Fragment>
                                        )
                                    })
                                )}
                            </div>
                            <SeparatorX/>
                            <div className="p-4 space-y-3">
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Subtotal</span>
                                    <span className="font-medium">${cart.subtotal.toFixed(2)}</span>
                                </div>
                                <Button className="w-full">
                                    Checkout
                                </Button>
                            </div>
                        </motion.aside>
                )}
            </AnimatePresence>
        </Fragment>
    )
}