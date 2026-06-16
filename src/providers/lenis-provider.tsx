import {useEffect, useRef} from "react";
import {type LenisRef, ReactLenis} from "lenis/react";

export const LenisProvider = ({
                                  children,
                              }: {
    children: React.ReactNode
}) => {
    const lenisRef = useRef<LenisRef>(null)

    useEffect(() => {
        let rafId: number

        function update(time: number) {
            lenisRef.current?.lenis?.raf(time)
            rafId = requestAnimationFrame(update)
        }

        rafId = requestAnimationFrame(update)

        return () => cancelAnimationFrame(rafId)
    }, [])

    return (
        <ReactLenis root options={{autoRaf: false}} ref={lenisRef}>
            {children}
        </ReactLenis>
    )
}