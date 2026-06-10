import {HeadContent, Scripts, createRootRoute} from '@tanstack/react-router'
import appCss from '../styles.css?url'
import {NavBar} from "#/components/layouts/nav-bar.tsx";
import {Footer} from "#/components/layouts/footer.tsx";

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
                title: 'TanStack Start Starter',
            },
        ],
        links: [
            {
                rel: 'stylesheet',
                href: appCss,
            },
        ],
    }),
    shellComponent: RootDocument,
})

function RootDocument({children}: { children: React.ReactNode }) {
    return (
        <html lang="en" className="dsark">
        <head>
            <HeadContent/>
        </head>
        <body>
        <NavBar/>
        <section className="min-h-[50vh]">
            {children}
        </section>
        <Footer/>
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
