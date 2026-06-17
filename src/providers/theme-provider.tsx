import {useEffect} from "react"
import {useUIStore} from "#/lib/store"

export function ThemeProvider({
      children,
  }: {
    children: React.ReactNode
}) {
    const isDarkMode = useUIStore((state) => state.isDarkMode)

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDarkMode)
    }, [isDarkMode])

    return children
}