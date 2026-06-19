import React, {Fragment, useState} from 'react';
import {Instagram, ArrowRight, CheckCircle} from 'lucide-react';
import {Button} from "#/components/ui";
import {FooterLinks} from "#/constants";
import {motion} from "framer-motion";
import {fadeUp, staggerContainer} from "#/lib/framer-motion.ts";

export const Footer = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState<boolean>(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setEmail('');
        }
    };

    return (
        <motion.footer
            className="bg-footer text-footer-foreground mt-auto"
            initial="hidden"
            whileInView="show"
            viewport={{once: true, amount: 0.2}}
            variants={staggerContainer}
        >
            <div className="max-w-330 mx-auto">

                {/* LINKS SECTION */}
                <motion.div className="py-14 lg:py-16">
                    <div className="max-w-8xl mx-auto px-6 lg:px-10">

                        <motion.div
                            className="grid grid-cols-2 lg:grid-cols-5 gap-10"
                            variants={staggerContainer}
                        >
                            {/* Brand */}
                            <motion.div
                                className="col-span-2 lg:col-span-2"
                                variants={fadeUp}
                            >
                                <p className="font-display text-3xl font-light tracking-[0.15em] uppercase mb-4">
                                    Triumphs CO.
                                </p>

                                <p className="font-body text-xs text-white/50 leading-relaxed">
                                    Curated vintage, thrifted, and pre-loved pieces sourced for style, quality, and
                                    individuality.
                                </p>

                                {subscribed ? (
                                    <motion.p
                                        className="font-body text-sm text-accent mt-10 flex items-center gap-2"
                                        variants={fadeUp}
                                    >
                                        <CheckCircle size={15} className="text-teal-300"/>
                                        <span>You're in. We'll notify you when new drops arrive.</span>
                                    </motion.p>
                                ) : (
                                    <Fragment>
                                        <motion.form
                                            onSubmit={handleSubscribe}
                                            className="flex gap-0 max-w-sm mt-10"
                                            variants={fadeUp}
                                        >
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="Your email address"
                                                className="flex-1 rounded-none bg-transparent border-b border-white/30 font-body text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-sage transition-colors"
                                                required
                                            />
                                            <Button
                                                type="submit"
                                                className="pb-3 pt-1 text-white/60 hover:text-sage rounded-none transition-colors"
                                            >
                                                <ArrowRight size={18}/>
                                            </Button>
                                        </motion.form>

                                        <motion.p
                                            className="mt-1 text-muted-foreground text-xs"
                                            variants={fadeUp}
                                        >
                                            Get notified about new thrift drops, vintage finds, and exclusive deals.
                                        </motion.p>
                                    </Fragment>
                                )}
                            </motion.div>

                            {/* Footer Links */}
                            {FooterLinks.map((col, i) => (
                                <motion.div
                                    key={col.title}
                                    variants={fadeUp}
                                    custom={i}
                                >
                                    <p className="font-body text-2xs tracking-[0.15em] uppercase text-white/40 mb-5">
                                        {col.title}
                                    </p>

                                    <ul className="space-y-3">
                                        {col.links.map((link) => (
                                            <li key={link.label}>
                                                <button
                                                    className="font-body text-sm text-white/70 hover:text-sage transition-colors">
                                                    {link.label}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>

                {/* BOTTOM BAR */}
                <motion.div
                    className="border-t border-white/10 py-6"
                    variants={fadeUp}
                >
                    <div
                        className="max-w-8xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">

                        <p className="font-body text-xs text-white/40">
                            © {new Date().getFullYear()} Triumphs Co. Giving fashion a second life.
                        </p>

                        <div className="flex items-center gap-6">
                            <button className="font-body text-xs text-white/40 hover:text-sage transition-colors">
                                Privacy Policy
                            </button>

                            <button className="font-body text-xs text-white/40 hover:text-sage transition-colors">
                                Terms of Service
                            </button>

                            <p className="text-xs text-white/40">
                                Follow us on Instagram for daily thrift drops.
                            </p>

                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/40 hover:text-sage transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram size={16}/>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.footer>
    );
};