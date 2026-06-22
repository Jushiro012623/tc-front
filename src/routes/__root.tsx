import {HeadContent, Scripts, createRootRoute} from '@tanstack/react-router'
import appCss from '../styles.css?url'
import {NavBar} from "#/components/layouts/nav-bar.tsx";
import {Footer} from "#/components/layouts/footer.tsx";
import 'lenis/dist/lenis.css'
import {NotFound} from "@components/layouts";
import {LenisProvider, ThemeProvider, ToastProvider} from "#/providers";

const THEME_DARK = `
(function () {
  try {
    const theme = localStorage.getItem("theme");
    const isDark = theme ? JSON.parse(theme)?.state?.isDarkMode : false;

    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  } catch (e) {}
})();
`
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
                title: 'Triumphs Co.',
            },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
            }
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
        <html lang="en">
        <head>
            <HeadContent/>
            <script dangerouslySetInnerHTML={{__html: THEME_DARK}} />
        </head>
        <body className="min-h-screen flex flex-col">
        <ToastProvider />
        <LenisProvider>
            <ThemeProvider>
                <NavBar/>
                <section className="flex-1 relative">
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
