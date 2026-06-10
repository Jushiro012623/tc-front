import {BrandLogo, Input} from "#/components/ui";
import {BiCart, BiMenu, BiSearch} from "react-icons/bi";
import {CgProfile} from "react-icons/cg";
import {useNavigate} from "@tanstack/react-router";

export const NavBar = () => {
    const navigate = useNavigate()
    return (
        <header
            className="w-full py-4 px-6 md:px-12 bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b border-border">
            <div className="max-w-7xl w-full mx-auto flex justify-between items-center gap-6">

                {/* Mobile Hamburger Menu */}
                <button className="md:hidden p-2 -ml-2 text-muted-foreground hover:text-foreground transition-colors">
                    <BiMenu size={24}/>
                </button>

                {/* Left: Brand Logo */}
                <div
                    onClick={() => navigate(({ to: '/' }))}
                    className="shrink-0 flex items-center justify-center md:justify-start flex-1 md:flex-none cursor-pointer">
                    <BrandLogo iconOnly={false}/>
                </div>

                {/* Center: Desktop Navigation */}
                <nav className="hidden md:flex flex-1 justify-center">
                    <ul className="flex items-center gap-8 text-sm font-medium text-muted-foreground">
                        <li>
                            <a href="/shop" className="hover:text-foreground transition-colors">Shop</a>
                        </li>
                        <li>
                            <a href="/sale" className="hover:text-foreground transition-colors">On Sale</a>
                        </li>
                        <li>
                            <a href="/new-arrivals" className="hover:text-foreground transition-colors">New Arrivals</a>
                        </li>
                        <li>
                            <a href="/brands" className="hover:text-foreground transition-colors">Brands</a>
                        </li>
                    </ul>
                </nav>

                {/* Right: Search & Actions */}
                <div className="flex items-center gap-3 md:gap-5 shrink-0">

                    {/* Desktop Search Bar */}
                    <div className="hidden lg:block relative">
                        <Input
                            type="search"
                            placeholder="Search for products..."
                            className="rounded-full w-64 pl-7 xl:w-80 bg-muted/70 border-transparent focus-visible:bg-transparent transition-all"
                        />
                    </div>

                    <button className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors">
                        <BiSearch size={22}/>
                    </button>

                    <ul className="flex items-center gap-2 sm:gap-4">
                        <li>
                            <button
                                onClick={() => navigate(({ to: '/auth/sign-in' }))}
                                className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted/50">
                                <CgProfile size={22}/>
                            </button>
                        </li>
                        <li>
                            <button
                                className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted/50 relative">
                                <BiCart size={22}/>
                                {/* Optional Notification Indicator for Cart */}
                                <span
                                    className="absolute top-1.5 right-1.5 size-2 bg-primary rounded-full border border-background"></span>
                            </button>
                        </li>
                    </ul>
                </div>

            </div>
        </header>
    )
}