import {useEffect, useState} from "react"
import {useUIStore} from "#/lib/store"

export function ThemeProvider({children}: { children: React.ReactNode }) {
    const isDarkMode = useUIStore((state) => state.isDarkMode)
    const [hydrated, setHydrated] = useState(false)

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDarkMode)

        setHydrated(true)
    }, [isDarkMode])

    if (!hydrated) return null

    return children
}