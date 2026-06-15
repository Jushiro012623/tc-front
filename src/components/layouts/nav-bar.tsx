import {BrandLogo, Input} from "#/components/ui";
import {BiCart, BiMenu, BiSearch} from "react-icons/bi";
import {CgProfile} from "react-icons/cg";
import {Link, useNavigate} from "@tanstack/react-router";
import clsx from "clsx";
import {NavLinks} from "#/constants";
import {useState} from "react";
import {CartDrawer} from "@components/layouts/cart-drawer.tsx";
import {useCartStore, useUIStore} from "#/lib/store.ts";
import {Moon, Sun} from "lucide-react";
import {MobileNavDrawer} from "@components/layouts/mobile-nav-drawer.tsx";

export const NavBar = () => {
    const navigate = useNavigate()
    const [mobileOpen, setMobileOpen] = useState(false)
    const [cartOpen, setCartOpen] = useState(false)
    const {isDarkMode, toggleDarkMode} = useUIStore()
    const {cart} = useCartStore()

    return (
        <>
            <header className={clsx(
                "w-full py-4 px-6 md:px-12 bg-background/80 backdrop-blur-md",
                "sticky top-0 z-50")
            }>
                <div className="max-w-7xl w-full mx-auto flex justify-between items-center gap-6">

                    {/*--------------------------------------Mobile Hamburger Menu--------------------------------------*/}
                    <button
                        onClick={() => setMobileOpen(true)}
                        className="md:hidden p-2 -ml-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <BiMenu size={24} />
                    </button>

                    {/*------------------Left: Brand Logo------------------*/}
                    <div
                        onClick={() => navigate(({to: '/'}))}
                        className={clsx("md:flex hidden items-center justify-center md:justify-start flex-1 md:flex-none",
                            "shrink-0 cursor-pointer")}>
                        <BrandLogo iconOnly={false}/>
                    </div>

                    {/*-----------Center: Desktop Navigation-----------*/}
                    <nav className="hidden md:flex flex-1 justify-center">
                        <ul className="flex items-center gap-8 text-sm font-medium text-muted-foreground">
                            {NavLinks.map(({href, label}: { href: string; label: string; }) => (
                                <li key={href}>
                                    <Link to={href}
                                          className="hover:text-foreground transition-colors">{label}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/*---------------Right: Search & Actions---------------*/}
                    <div className="flex items-center gap-3 md:gap-5 shrink-0">

                        {/*---------Desktop Search Bar---------*/}
                        <div className="hidden lg:block relative">
                            <Input
                                type="search"
                                placeholder="Search for products..."
                                className={clsx(
                                    "border-transparent rounded-full! focus-visible:bg-transparent transition-all",
                                    "rounded-full w-64 pl-7 xl:w-80 bg-muted/70 ")}
                            />
                        </div>

                        <button className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors">
                            <BiSearch size={22}/>
                        </button>

                        <ul className="flex items-center gap-2 sm:gap-4">
                            <li>
                                <button
                                    onClick={() => navigate(({to: '/auth/sign-in'}))}
                                    className={clsx(
                                        "p-2 text-muted-foreground hover:text-primary",
                                        "transition-colors rounded-full hover:bg-muted/50")}
                                >
                                    <CgProfile size={22}/>
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => setCartOpen(true)}
                                    className={clsx(
                                        "p-2 text-muted-foreground hover:text-primary",
                                        "transition-colors rounded-full hover:bg-muted/50 relative"
                                    )}
                                >
                                    <BiCart size={22}/>
                                    {cart.items.length !== 0 && <span
                                        className="size-2 bg-primary rounded-full border border-background absolute top-1.5 right-1.5"/>}
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={toggleDarkMode}
                                    className={clsx(
                                        "relative p-2 text-muted-foreground hover:text-primary",
                                        "transition-colors rounded-full hover:bg-muted/50"
                                    )}
                                >
                                    <div className="relative size-5.5">
                                        <Sun
                                            size={22}
                                            className={clsx(
                                                "absolute inset-0 transition-all duration-300",
                                                isDarkMode
                                                    ? "rotate-0 scale-100 opacity-100"
                                                    : "rotate-90 scale-0 opacity-0"
                                            )}
                                        />

                                        <Moon
                                            size={22}
                                            className={clsx(
                                                "absolute inset-0 transition-all duration-300",
                                                isDarkMode
                                                    ? "-rotate-90 scale-0 opacity-0"
                                                    : "rotate-0 scale-100 opacity-100"
                                            )}
                                        />
                                    </div>
                                </button>
                            </li>
                        </ul>
                    </div>

                </div>
            </header>

            <CartDrawer
                open={cartOpen}
                onClose={() => setCartOpen(false)}
            />
            <MobileNavDrawer
                open={mobileOpen}
                onClose={() => setMobileOpen(false)}
            />
        </>

    )
}