import {HeadContent, Scripts, createRootRoute} from '@tanstack/react-router'
import appCss from '../styles.css?url'
import {NavBar} from "#/components/layouts/nav-bar.tsx";
import {Footer} from "#/components/layouts/footer.tsx";
import 'lenis/dist/lenis.css'
import {useEffect, useRef} from "react";
import {type LenisRef, ReactLenis} from "lenis/react";
import {ThemeProvider} from "#/providers/theme-provider.tsx";
import {NotFound} from "@components/layouts";

export const Route = createRootRoute({
    head: () => ({
        meta: [
            {
                charSet: 'utf-8',
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                title: 'Triumph Co.',
            },
        ],
        links: [
            {
                rel: 'stylesheet',
                href: appCss,
            },
            {
                rel: 'icon',
                type: 'image/svg+xml',
                href: '/logo-n0-bg.svg',
            },

        ],
    }),
    notFoundComponent: NotFound,
    shellComponent: RootDocument,
})

function RootDocument({children}: { children: React.ReactNode }) {

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
        <html lang="en" className="">
        <head>
            <HeadContent/>
        </head>
        <body>
        <ReactLenis root options={{autoRaf: false}} ref={lenisRef}>
            <ThemeProvider>
                <NavBar/>
                <section className="min-h-[50vh]">
                    {children}
                </section>
                <Footer/>
            </ThemeProvider>
        </ReactLenis>
        {/*<TanStackDevtools*/}
        {/*    config={{*/}
        {/*        position: 'bottom-right',*/}
        {/*    }}*/}
        {/*    plugins={[*/}
        {/*        {*/}
        {/*            name: 'Tanstack Router',*/}
        {/*            render: <TanStackRouterDevtoolsPanel/>,*/}
        {/*        },*/}
        {/*    ]}*/}
        {/*/>*/}
        <Scripts/>
        </body>
        </html>
    )
}
