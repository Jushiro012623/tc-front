import React, {useState} from 'react';
import {Instagram, ArrowRight} from 'lucide-react';
import {Button} from "#/components/ui";

export const Footer= () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setEmail('');
        }
    };

    return (
        <footer className="bg-zinc-800 text-white">
            {/* Newsletter */}
            <div className="border-b border-white/10 py-14 lg:py-16">
                <div className="max-w-8xl mx-auto px-6 lg:px-10">
                    <div className="max-w-xl mx-auto text-center">
                        <h2 className="font-display text-display-sm font-light mb-4">Join the Conversation</h2>
                        <p className="font-body text-sm text-white/60 mb-8">
                            New arrivals, exclusive previews, and considered thoughts on style — delivered rarely, never
                            relentlessly.
                        </p>
                        {subscribed ? (
                            <p className="font-body text-sm text-sage">Thank you. You're on the list.</p>
                        ) : (
                            <form onSubmit={handleSubscribe} className="flex gap-0 max-w-sm mx-auto">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your email address"
                                    className="flex-1 bg-transparent border-b border-white/30 pb-3 pt-1 font-body text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-sage transition-colors"
                                    required
                                />
                                <Button
                                        className="pb-3 pt-1 pl-4 text-white/60 hover:text-sage rounded-none transition-colors"
                                        aria-label="Subscribe">
                                    <ArrowRight size={18}/>
                                </Button>
                            </form>
                        )}
                    </div>
                </div>
            </div>

            {/* Links */}
            <div className="py-14 lg:py-16">
                <div className="max-w-8xl mx-auto px-6 lg:px-10">
                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
                        {/* Brand */}
                        <div className="col-span-2 lg:col-span-2">
                            <p className="font-display text-3xl font-light tracking-[0.15em] uppercase mb-4">Triumph CO.</p>
                            <p className="font-body text-xs text-white/50 leading-relaxed ">
                                Considered clothing for considered lives. Est. 2019, Paris.
                            </p>
                        </div>

                        {[
                            {
                                title: 'Shop', links: [
                                    {label: 'Women', path: '/collections/women'},
                                    {label: 'Men', path: '/collections/men'},
                                    {label: 'Lifestyle', path: '/collections/lifestyle'},
                                    {label: 'New Arrivals', path: '/shop'},
                                    {label: 'Sale', path: '/shop'},
                                ]
                            },
                            {
                                title: 'Company', links: [
                                    {label: 'About Us', path: '/about'},
                                    {label: 'Journal', path: '/blog'},
                                    {label: 'Sustainability', path: '/about'},
                                    {label: 'Careers', path: '/about'},
                                ]
                            },
                            {
                                title: 'Support', links: [
                                    {label: 'Contact', path: '/contact'},
                                    {label: 'FAQ', path: '/faq'},
                                    {label: 'Shipping', path: '/faq'},
                                    {label: 'Returns', path: '/faq'},
                                    {label: 'Size Guide', path: '/faq'},
                                ]
                            },
                        ].map((col) => (
                            <div key={col.title}>
                                <p className="font-body text-2xs tracking-[0.15em] uppercase text-white/40 mb-5">{col.title}</p>
                                <ul className="space-y-3">
                                    {col.links.map((link) => (
                                        <li key={link.label}>
                                            <button
                                                className="font-body text-sm text-white/70 hover:text-sage transition-colors"
                                            >
                                                {link.label}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 py-6">
                <div
                    className="max-w-8xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="font-body text-xs text-white/40">© {new Date().getFullYear()} Triumph Co. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <button
                                className="font-body text-xs text-white/40 hover:text-sage transition-colors">Privacy
                            Policy
                        </button>
                        <button
                                className="font-body text-xs text-white/40 hover:text-sage transition-colors">Terms of
                            Service
                        </button>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                           className="text-white/40 hover:text-sage transition-colors" aria-label="Instagram">
                            <Instagram size={16}/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};