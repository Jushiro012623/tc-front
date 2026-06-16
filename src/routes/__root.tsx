import {HeadContent, Scripts, createRootRoute} from '@tanstack/react-router'
import appCss from '../styles.css?url'
import {NavBar} from "#/components/layouts/nav-bar.tsx";
import {Footer} from "#/components/layouts/footer.tsx";
import 'lenis/dist/lenis.css'
import {NotFound} from "@components/layouts";
import {LenisProvider, ThemeProvider} from "#/providers";

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
    return (
        <html lang="en" className="">
        <head>
            <HeadContent/>
        </head>
        <body>
        <LenisProvider>
            <ThemeProvider>
                <NavBar/>
                <section className="min-h-[50vh] relative">
                    {children}
                </section>
                <Footer/>
            </ThemeProvider>
        </LenisProvider>
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
