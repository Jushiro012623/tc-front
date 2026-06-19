import {createFileRoute, Link} from '@tanstack/react-router'
import {commitments, defaultShopFilter} from "#/constants.ts";
import {ArrowRight} from "lucide-react";
import {Button, Main} from "@components/ui";
import {motion} from "framer-motion"
import {fadeUp, staggerContainer} from "#/lib/framer-motion.ts";

export const Route = createFileRoute('/sustainability')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <Main className="max-w-7xl mx-auto px-6 py-16">
            <motion.section
                className="flex flex-col items-center justify-center text-center"
                variants={staggerContainer}
                initial="hidden"
                animate="show"
            >
                <motion.h1
                    variants={fadeUp}
                    className="font-serif text-4xl sm:text-5xl lg:text-7xl font-medium leading-tight"
                >
                    Our Sustainability Journey
                </motion.h1>

                <motion.p
                    variants={fadeUp}
                    className="leading-8 max-w-3xl mt-6 text-muted-foreground"
                >
                    At Triumph Co, sustainability isn't a buzzword—it's embedded in every decision we make.
                </motion.p>
            </motion.section>

            <motion.section
                className="my-24"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
            >
                <motion.h2 variants={fadeUp}
                    className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-center">
                    Our Commitments
                </motion.h2>

                <motion.p variants={fadeUp}
                   className="leading-8 text-center max-w-xl mx-auto mt-6 mb-12 text-muted-foreground">
                    These commitments guide how we operate and help us create a more
                    sustainable future through conscious fashion.
                </motion.p>

                <motion.div
                    className="grid md:grid-cols-2 gap-6"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: true, amount: 0.2}}
                >
                    {commitments.map((item) => (
                        <motion.div
                            key={item.title}
                            variants={fadeUp}
                            whileHover={{
                                y: -6,
                                transition: {duration: 0.2}
                            }}
                            className="bg-muted/50 rounded-xl p-8"
                        >
                            <h3 className="font-serif text-2xl font-bold mb-3">
                                {item.title}
                            </h3>

                            <p className="leading-8 max-w-2xl text-muted-foreground">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>

            <motion.section
                className="my-24"
                initial={{opacity: 0, y: 40}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, amount: 0.2}}
                transition={{duration: 0.7}}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium">
                        Why Thrifting Matters
                    </h2>

                    <p className="leading-8 mt-6 text-muted-foreground">
                        The fashion industry produces millions of tons of textile waste
                        every year. Choosing second-hand clothing is one of the simplest
                        ways individuals can reduce their environmental footprint while
                        still enjoying fashion and self-expression.
                    </p>

                    <p className="leading-8 mt-4 text-muted-foreground">
                        Small choices add up. Every thrifted item purchased helps support a
                        circular fashion economy where clothing is reused, appreciated, and
                        kept in use for as long as possible.
                    </p>
                </div>
            </motion.section>

            <motion.section
                className="text-cream py-10 sm:py-24 bg-muted rounded-xl"
                initial={{opacity: 0, scale: 0.96}}
                whileInView={{opacity: 1, scale: 1}}
                viewport={{once: true}}
                transition={{duration: 1}}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center space-y-6">
                        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-center">
                            Be Part of the Movement
                        </h2>

                        <p className="leading-8 max-w-2xl mx-auto mt-6 mb-8 text-muted-foreground">
                            Sustainability isn't achieved by one business alone—it's built through
                            collective action. By choosing thrifted fashion, you're helping create
                            a future where style and responsibility go hand in hand.
                        </p>

                        <Link to="/shop" search={defaultShopFilter}>
                            <Button size="lg" className="w-full sm:w-auto">
                                Explore Our Collection
                                <ArrowRight size={15}/>
                            </Button>
                        </Link>
                    </div>
                </div>
            </motion.section>
        </Main>
    )
}
