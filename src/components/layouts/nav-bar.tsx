import {BrandLogo, Input} from "#/components/ui";
import {BiCart, BiMenu, BiSearch} from "react-icons/bi";
import {CgProfile} from "react-icons/cg";
import {Link, useLocation, useNavigate} from "@tanstack/react-router";
import clsx from "clsx";
import {NavLinks} from "#/constants";
import {useState} from "react";
import {CartDrawer} from "@components/layouts/cart-drawer.tsx";
import {useCartStore, useUIStore} from "#/lib/store.ts";
import {Moon, Search, Sun} from "lucide-react";
import {MobileNavDrawer} from "@components/layouts/mobile-nav-drawer.tsx";

export const NavBar = () => {
    const navigate = useNavigate()
    const pathname = useLocation().pathname

    const [mobileOpen, setMobileOpen] = useState(false)
    const [cartOpen, setCartOpen] = useState(false)
    const {isDarkMode, toggleDarkMode} = useUIStore()
    const [isSearchBarOpen, setIsSearchBarOpen] = useState<boolean>(false)
    const {cart} = useCartStore()

    const handleSearchSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const search = formData.get("search")
        const active = document.activeElement as HTMLElement | null
        if (!search) return
        if (isSearchBarOpen) setIsSearchBarOpen(false)
        navigate({
            to: "/shop",
            search: {
                category: 'All',
                style: 'All',
                sizes: [],
                priceMin: 0,
                priceMax: 300,
                name: search?.toString() || undefined
            },
            replace: true
        })
        active?.blur?.()
        e.currentTarget.reset()
    }

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
                        <BiMenu size={24}/>
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
                        <ul className="flex items-center gap-4 text-sm font-medium text-muted-foreground">
                            {NavLinks.map(({href, label}: { href: string; label: string; }) => (
                                <li key={href}>
                                    <Link to={href} className={clsx("transition-colors rounded-md py-2 px-3 ",
                                        pathname === href ? "text-primary bg-muted" : 'hover:text-foreground hover:bg-muted'
                                    )}
                                    >{label}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/*---------------Right: Search & Actions---------------*/}
                    <div className="flex items-center gap-3 md:gap-5 shrink-0">

                        {/*---------Desktop Search Bar---------*/}
                        <form className="hidden lg:block relative" onSubmit={handleSearchSubmit}>
                            <Input
                                type="search"
                                name="search"
                                placeholder="Crop Top, Blouse, SKU-001"
                                className={clsx(
                                    "border-transparent rounded-full! bg-muted/50 focus-visible:bg-transparent transition-all",
                                    "rounded-full w-64 pl-7 xl:w-80 ")}
                                leftIcon={(
                                    <button>
                                        <Search className="text-primary/80" size={20}/>
                                    </button>
                                )}
                            />
                        </form>

                        <button onClick={() => setIsSearchBarOpen((v) => !v)}
                                className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
                        >
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
                <div
                    className={clsx(
                        "lg:hidden overflow-hidden ",
                        "transition-all duration-300 ",
                        isSearchBarOpen
                            ? "max-h-24 opacity-100"
                            : "max-h-0 opacity-0 border-transparent"
                    )}
                >
                    <form
                        onSubmit={handleSearchSubmit}
                        className="px-4 py-3"
                    >
                        <div className="w-full">
                            <Input
                                autoFocus
                                type="search"
                                name="search"
                                placeholder="Crop Top, Blouse, SKU-001"
                                className="w-full bg-muted/50"
                                leftIcon={
                                    <button><Search
                                        size={18}
                                        className="text-muted-foreground  "
                                    /></button>
                                }
                            />
                        </div>
                    </form>
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