import {useEffect} from "react";
import {useLenis} from "lenis/react";

export function useLockScroll(locked: boolean) {
    const lenis = useLenis()

    useEffect(() => {
        if (!lenis) return

        if (locked) {
            document.body.classList.add("overflow-hidden")
            // lenis.stop()
        } else {
            document.body.classList.remove("overflow-hidden")
            // lenis.start()
        }
        return () => {
            document.body.classList.remove("overflow-hidden")
            // lenis?.start()
        }
    }, [locked, lenis])
}