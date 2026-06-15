import clsx from "clsx"
import {BiX} from "react-icons/bi"
import {Link, useNavigate} from "@tanstack/react-router"
import {NavLinks} from "#/constants"
import {Button} from "@components/ui";

type Props = {
    open: boolean
    onClose: () => void
}

export const MobileNavDrawer = ({open, onClose}: Props) => {
    const navigation = useNavigate()
    return (
        <>
            {/* overlay */}
            <div
                onClick={onClose}
                className={clsx(
                    "fixed inset-0 bg-black/60 backdrop-blur-[2px] z-50 transition-opacity duration-300",
                    open ? "opacity-100" : "opacity-0 pointer-events-none"
                )}
            />

            {/* drawer */}
            <aside
                className={clsx(
                    "fixed top-0 left-0 h-full w-80 max-w-[85vw]",
                    "bg-background border-r border-border",
                    "z-50 shadow-2xl",
                    "transition-transform duration-300 ease-out flex flex-col",
                    open ? "translate-x-0" : "-translate-x-full"
                )}
            >
                {/* top accent bar */}
                <div className="h-1 w-full bg-linear-to-r from-primary/60 via-primary to-transparent"/>

                {/* header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-border/60">
                    <div className="flex flex-col">
                        <span className="font-semibold tracking-wide">Menu</span>
                    </div>

                    <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-muted/60 transition-colors"
                    >
                        <BiX size={22}/>
                    </button>
                </div>

                {/* links */}
                <nav className="p-4 flex flex-col gap-2">
                    {NavLinks.map(({href, label}) => (
                        <Link
                            key={href}
                            to={href}
                            onClick={onClose}
                            className="group px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all flex items-center justify-between"
                        >
                            <span>{label}</span>
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-primary">
                                →
                            </span>
                        </Link>
                    ))}
                </nav>

                {/* footer hint */}
                <div className="mt-auto p-4 border-t border-border/60 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Guest</span>
                    <Button
                        onClick={() => navigation({to: "/auth/sign-in"})}
                        className="text-xs text-primary hover:underline">
                        Sign in
                    </Button>
                </div>
            </aside>
        </>
    )
}