import {Fragment, useEffect, useState} from "react"
import {useUIStore} from "#/lib/store"

export function ThemeProvider() {
    const isDarkMode = useUIStore((state) => state.isDarkMode)
    const [hydrated, setHydrated] = useState(false)

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDarkMode)

        setHydrated(true)
    }, [isDarkMode])

    if (!hydrated) return null

    return <Fragment />
}