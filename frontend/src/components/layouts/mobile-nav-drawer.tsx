import clsx from "clsx"
import { BiX } from "react-icons/bi"
import { Link, useLocation, useNavigate } from "@tanstack/react-router"
import { NavLinks } from "#/constants"
import { BrandLogo, Button } from "@components/ui"
import { AnimatePresence, motion } from "framer-motion"
import { CgProfile } from "react-icons/cg"
import {Heart, Moon, Sun} from "lucide-react"
import { useUIStore } from "#/lib/store"

type Props = {
    open: boolean
    onClose: () => void
}

export const MobileNavDrawer = ({ open, onClose }: Props) => {
    const location = useLocation()
    const path = location.pathname
    const navigation = useNavigate()

    const { isDarkMode, toggleDarkMode } = useUIStore()

    return (
        <>
            <AnimatePresence>
                {open && (
                    <motion.div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        onClick={onClose}
                    />
                )}
            </AnimatePresence>

            <AnimatePresence>
                {open && (
                    <motion.aside
                        className="fixed top-1 right-0 bottom-1 rounded-l-2xl overflow-hidden w-[85vw] max-w-sm bg-background/95 backdrop-blur-xl shadow-2xl z-50 flex flex-col"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    >
                        {/* header */}
                        <div className="flex items-center justify-between px-6 py-5">
                            <Link to={'/'} onClick={onClose} className="hover:opacity-80 transition-opacity">
                                <BrandLogo iconOnly={false} />
                            </Link>
                            <button
                                onClick={onClose}
                                className="p-2 -mr-2 rounded-full bg-muted/30 hover:bg-muted text-muted-foreground hover:text-foreground transition-all active:scale-95"
                            >
                                <BiX size={24} />
                            </button>
                        </div>

                        {/* links */}
                        <nav className="px-4 py-2 flex flex-col gap-1.5 flex-1 overflow-y-auto">
                            <Link
                                to="/"
                                onClick={onClose}
                                className={clsx(
                                    "flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200",
                                    "text-sm font-medium group",
                                    path === "/"
                                        ? "bg-muted text-foreground shadow-sm"
                                        : "hover:bg-muted/50 hover:text-foreground hover:translate-x-1"
                                )}
                            >
                                <span className="flex items-center gap-3">
                                    <span className={clsx(
                                        "w-1.5 h-1.5 rounded-full transition-colors",
                                        path === "/" ? "bg-primary shadow-[0_0_8px_rgba(var(--primary),0.6)]" : "bg-transparent group-hover:bg-border"
                                    )} />
                                    Home
                                </span>
                                <span className="opacity-0 text-muted-foreground/50 group-hover:opacity-100 transition-opacity">
                                    →
                                </span>
                            </Link>

                            {NavLinks.map(({ href, label }) => (
                                <Link
                                    key={href}
                                    to={href}
                                    onClick={onClose}
                                    className={clsx(
                                        "flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200",
                                        "text-sm font-medium group",
                                        path === href
                                            ? "bg-muted text-foreground shadow-sm"
                                            : "hover:bg-muted/50 hover:text-foreground hover:translate-x-1"
                                    )}
                                >
                                    <span className="flex items-center gap-3">
                                        <span className={clsx(
                                            "w-1.5 h-1.5 rounded-full transition-colors",
                                            path === href ? "bg-primary shadow-[0_0_8px_rgba(var(--primary),0.6)]" : "bg-transparent group-hover:bg-border"
                                        )} />
                                        {label}
                                    </span>
                                    <span className="opacity-0 text-muted-foreground/50 group-hover:opacity-100 transition-opacity">
                                        →
                                    </span>
                                </Link>
                            ))}
                        </nav>

                        <div className="mt-auto">
                            {/* Utilities Section */}
                            <div className="px-6 py-4">
                                <div className="rounded-2xl border border-border/40 bg-muted/10 p-1.5 shadow-sm backdrop-blur-sm space-y-0.5">
                                    {/* Account */}
                                    <button
                                        onClick={() => {
                                            onClose()
                                            navigation({ to: "/wishlists" })
                                        }}
                                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm hover:bg-muted/50 transition-colors text-muted-foreground hover:text-foreground active:scale-[0.98]"
                                    >
                                        <Heart size={18} className="text-foreground/70" />
                                        <span className="font-medium">Wishlist</span>
                                    </button>
                                    <button
                                        onClick={() => {
                                            onClose()
                                            navigation({ to: "/auth/sign-in" })
                                        }}
                                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm hover:bg-muted/50 transition-colors text-muted-foreground hover:text-foreground active:scale-[0.98]"
                                    >
                                        <CgProfile size={18} className="text-foreground/70" />
                                        <span className="font-medium">Account</span>
                                    </button>

                                    {/* Theme Toggle */}
                                    <button
                                        onClick={toggleDarkMode}
                                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm hover:bg-muted/50 transition-colors text-muted-foreground hover:text-foreground active:scale-[0.98]"
                                    >
                                        {isDarkMode ? (
                                            <>
                                                <Sun size={18} className="text-foreground/70" />
                                                <span className="font-medium">Light Mode</span>
                                            </>
                                        ) : (
                                            <>
                                                <Moon size={18} className="text-foreground/70" />
                                                <span className="font-medium">Dark Mode</span>
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* footer hint */}
                            <div className="px-6 py-5 border-t border-border/40 flex items-center justify-between bg-muted/5">
                                <div className="flex items-center gap-2.5 text-muted-foreground">
                                    <div className="p-1.5 bg-muted rounded-full">
                                        <CgProfile size={16} />
                                    </div>
                                    <span className="text-sm font-medium">Guest</span>
                                </div>
                                <Button
                                    onClick={() => {
                                        onClose()
                                        navigation({ to: "/auth/sign-in" })
                                    }}
                                    variant="ghost"
                                    size="sm"
                                    className="text-sm text-primary hover:text-primary/80 hover:bg-primary/10 rounded-full px-4"
                                >
                                    Sign in
                                </Button>
                            </div>
                        </div>
                    </motion.aside>
                )}
            </AnimatePresence>
        </>
    )
}