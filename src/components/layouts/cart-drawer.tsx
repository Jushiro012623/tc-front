import clsx from "clsx"
import {BiX} from "react-icons/bi"
import {Button, SeparatorX} from "@components/ui"
import type {CartItem} from "#/lib/types.ts"
import {Fragment} from "react"

type Props = {
    open: boolean
    onClose: () => void
    items?: CartItem[]
}

export const CartDrawer = ({open, onClose, items = []}: Props) => {
    return (
        <Fragment>
            {/* BACKDROP */}
            <div
                onClick={onClose}
                className={clsx(
                    "fixed inset-0 bg-black/40 transition-opacity z-50",
                    open ? "opacity-100" : "opacity-0 pointer-events-none"
                )}
            />

            <aside
                className={clsx(
                    "fixed top-0 right-0 h-full w-full rounded-l-lg sm:w-105 bg-background shadow-xl z-50 transition-transform duration-300 flex flex-col",
                    open ? "translate-x-0" : "translate-x-full"
                )}
            >
                {/* HEADER */}
                <div className="flex items-start justify-between p-5 border-b border-border bg-background/60 backdrop-blur">
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
                        <BiX size={22} />
                    </button>
                </div>

                <SeparatorX/>

                {/* CONTENT */}
                <div className="flex-1 overflow-auto p-4 space-y-4">
                    {items.length === 0 ? (
                        <p className="text-muted-foreground text-sm text-center mt-10">
                            Your cart is empty
                        </p>
                    ) : (
                        items.map((item, index) => {
                            const isLastItem = index === items.length - 1

                            return (
                                <Fragment key={item.id}>
                                    <div className="flex gap-3 items-center pb-3">
                                        <img
                                            src={item.product.image}
                                            alt={item.product.name}
                                            className="w-14 h-14 bg-muted rounded-md object-cover"
                                        />

                                        <div className="flex-1">
                                            <p className="text-sm font-medium">
                                                {item.product.name}
                                            </p>

                                            <p className="text-xs text-muted-foreground">
                                                Qty: {item.quantity}
                                            </p>

                                            {(item.selectedSize || item.selectedColor) && (
                                                <p className="text-[10px] text-muted-foreground">
                                                    {item.selectedSize && `Size: ${item.selectedSize}`}
                                                    {item.selectedSize && item.selectedColor && " • "}
                                                    {item.selectedColor && `Color: ${item.selectedColor}`}
                                                </p>
                                            )}
                                        </div>

                                        <p className="text-sm font-medium">
                                            ${(item.product.price * item.quantity).toFixed(2)}
                                        </p>
                                    </div>

                                    {!isLastItem && <SeparatorX/>}
                                </Fragment>
                            )
                        })
                    )}
                </div>

                {/* FOOTER */}
                <SeparatorX/>

                <div className="p-4 space-y-3">
                    <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span className="font-medium">$0.00</span>
                    </div>

                    <Button className="w-full bg-black text-white py-3 rounded-lg hover:opacity-90 transition">
                        Checkout
                    </Button>
                </div>
            </aside>
        </Fragment>
    )
}