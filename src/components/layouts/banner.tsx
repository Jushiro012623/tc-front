import {useEffect, useState} from "react";
import {X} from "lucide-react";
import {Button} from "@components/ui";
import {Link} from "@tanstack/react-router";
import {defaultShopFilter} from "#/constants.ts";

interface BannerProps {
    id: string;
    announcement: string;
    image: string;
}

export const Banner = ({
                           id,
                           announcement,
                           image,
                       }: BannerProps) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const dismissed = localStorage.getItem(`popup:${id}`);
        setVisible(!dismissed);
    }, [id]);

    const handleClose = () => {
        localStorage.setItem(`popup:${id}`, "hidden");
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            {/* overlay */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={handleClose}
            />

            {/* modal */}
            <div
                className="relative w-full max-w-2xl bg-background rounded-3xl overflow-hidden shadow-2xl animate-fadeIn">

                {/* close */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 bg-background text-foreground shadow-md p-2 rounded-full hover:scale-105 transition"
                >
                    <X size={18}/>
                </button>

                {/* image */}
                <div className="w-full h-105 bg-gray-100">
                    <img
                        src={image}
                        alt="announcement"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* content */}
                <div className="p-6 text-center space-y-2">
                    <p className="font-serif text-3xl font-semibold text-foreground">
                        {announcement}
                    </p>

                    <p className="text-sm text-muted-foreground">
                        New drop incoming — don’t miss it.
                    </p>
                </div>

                {/* CTA */}
                <div className="p-6 pt-0">
                    <Link to={'/shop'} search={defaultShopFilter} onClick={handleClose}>
                        <Button className="w-full py-6 text-base">
                            Shop Now
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};