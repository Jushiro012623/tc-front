import {createFileRoute} from '@tanstack/react-router'
import {Button, Input, Main} from "@components/ui";
import {contactDetails, FAQ} from "#/constants.ts";
import {fadeUp, staggerContainer} from "#/lib/framer-motion.ts";
import {motion} from 'framer-motion'

export const Route = createFileRoute('/contact')({
    component: ContactPage,
    head: () => ({
        meta: [
            {
                title: 'Contact Us | Triumphs Co.'
            },
            {
                name: 'description',
                content: 'Contact Triumphs Co. for questions about orders, thrift finds, shipping, returns, or general inquiries.'
            },
            {
                property: 'og:title',
                content: 'Contact Us | Triumphs Co.'
            },
            {
                property: 'og:description',
                content: 'Get in touch with Triumphs Co. We are here to help with orders, products, and customer support.'
            }
        ],
    })
})

function ContactPage() {
    return (
        <Main className="max-w-7xl mx-auto px-6 py-16">
            {/* Hero */}
            <motion.section
                className="flex flex-col justify-center text-center mb-20"
                variants={staggerContainer}
                initial="hidden"
                animate="show"
            >
                <motion.h1
                    variants={fadeUp}
                    className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-tight"
                >
                    Get in Touch
                </motion.h1>

                <motion.p
                    variants={fadeUp}
                    className="leading-8 max-w-3xl mt-6 text-muted-foreground mx-auto"
                >
                    Have questions about our thrift finds, orders, or store?
                    We'd love to hear from you.
                </motion.p>
            </motion.section>

            <section className="grid lg:grid-cols-2 gap-15 mb-24 items-stretch">
                {/* LEFT */}
                <motion.div
                    className="space-y-4.5 h-full"
                    initial={{opacity: 0, x: -40}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.7}}
                >
                    <h2 className="font-serif text-3xl font-semibold mb-6">
                        Reach Out to Us
                    </h2>
                    {contactDetails.map((item) => {
                        const Icon = item.icon

                        return (
                            <motion.div
                                key={item.label}
                                whileHover={{
                                    y: -4,
                                    transition: {duration: 0.2}
                                }}
                                className="bg-muted/50 rounded-2xl px-5 py-4"
                            >
                                <p className="text-xl font-serif font-bold flex items-center gap-2">
                                    <Icon className="text-primary" size={16}/>
                                    {item.label}
                                </p>

                                <p className="tracking-wide text-sm text-muted-foreground">
                                    {item.value}
                                </p>

                                <p className="text-xs text-muted-foreground mt-1">
                                    {item.note}
                                </p>
                            </motion.div>
                        )
                    })}
                </motion.div>

                {/* RIGHT */}
                <motion.div
                    className="h-full flex flex-col"
                    initial={{opacity: 0, x: 40}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.7}}
                >
                    <h2 className="font-serif text-3xl font-semibold mb-6">
                        Send us a Message
                    </h2>

                    <form className="space-y-4 flex-1 flex flex-col">
                        <Input type="text" placeholder="Your name" label="Full Name"/>
                        <Input type="email" placeholder="Your email" label="Email"/>
                        <Input placeholder="How can we help you?" label="Subject"/>
                        <textarea
                            placeholder="Tell us more..."
                            rows={5}
                            className="flex-1 input w-full border rounded-lg px-4 py-3"
                        />
                        <Button className="w-full rounded-full mt-auto">
                            Send Message
                        </Button>
                    </form>
                </motion.div>
            </section>

            {/* FAQ */}
            <section>
                <motion.h2
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.6}}
                    className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-left mb-12"
                >
                    Frequently Asked Questions
                </motion.h2>

                <motion.div
                    className="max-w-3xl space-y-4"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: true, amount: 0.1}}
                >
                    {FAQ.map((item) => (
                        <motion.div
                            key={item.q}
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    y: 20,
                                },
                                show: {
                                    opacity: 1,
                                    y: 0,
                                },
                            }}
                            whileHover={{
                                x: 4,
                            }}
                            className="border bg-muted/20 border-muted rounded-xl p-6"
                        >
                            <p className="font-medium">{item.q}</p>

                            <p className="text-muted-foreground mt-2 leading-7">
                                {item.a}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>
        </Main>
    )
}
