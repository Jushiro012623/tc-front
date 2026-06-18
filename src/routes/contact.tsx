import {createFileRoute} from '@tanstack/react-router'
import {Button, Input} from "@components/ui";
import {contactDetails, FAQ} from "#/constants.ts";

export const Route = createFileRoute('/contact')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <main className="max-w-7xl mx-auto px-6 py-16">
            {/* Hero */}
            <section className="flex flex-col justify-center text-center mb-20">
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-tight">
                    Get in Touch
                </h1>

                <p className="leading-8 max-w-3xl mt-6 text-muted-foreground mx-auto">
                    Have questions about our thrift finds, orders, or store?
                    We’d love to hear from you. Reach out anytime and we’ll get back to you as soon as we can.
                </p>
            </section>

            <section className="grid lg:grid-cols-2 gap-15 mb-24 items-stretch">
                {/* LEFT */}
                <div className="space-y-4.5 h-full">
                    {contactDetails.map((item) => {
                        const Icon = item.icon

                        return (
                            <div
                                key={item.label}
                                className="bg-muted/50 rounded-2xl px-5 py-4"
                            >
                                <p className="text-xl font-serif font-bold flex items-center gap-2">
                                    <Icon className="text-primary" size={16} />
                                    {item.label}
                                </p>

                                <p className="tracking-wide text-sm text-muted-foreground">
                                    {item.value}
                                </p>

                                <p className="text-xs text-muted-foreground mt-1">
                                    {item.note}
                                </p>
                            </div>
                        )
                    })}
                </div>

                {/* RIGHT */}
                <div className="h-full flex flex-col">
                    <h2 className="font-serif text-3xl font-semibold mb-6">
                        Send us a Message
                    </h2>

                    <form className="space-y-4 flex-1 flex flex-col">
                        <Input type="text" placeholder="Your name" />
                        <Input type="email" placeholder="Your email" />
                        <Input placeholder="How can we help you?" />

                        <textarea
                            placeholder="Tell us more..."
                            rows={5}
                            className="flex-1 input w-full border rounded-lg px-4 py-3"
                        />

                        <Button className="w-full rounded-full mt-auto">
                            Send Message
                        </Button>
                    </form>
                </div>
            </section>

            {/* FAQ */}
            <section>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-left mb-12">
                    Frequently Asked Questions
                </h2>

                <div className="max-w-3xl space-y-4">
                    {FAQ.map((item) => (
                        <div key={item.q} className="border bg-muted/20 border-muted rounded-xl p-6">
                            <p className="font-medium">{item.q}</p>
                            <p className="text-muted-foreground mt-2 leading-7">
                                {item.a}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}
