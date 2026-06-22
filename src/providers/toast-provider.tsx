import {useToastStore} from "#/lib/store";
import {useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {ToastItem} from "@components/ui/toast.tsx";

export function ToastProvider() {
    const {toasts, removeToast} = useToastStore();
    const [, forceRender] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            forceRender((v) => v + 1);
        }, 16);

        return () => clearInterval(interval);
    }, []);

    const reversedToasts = [...toasts].reverse();

    return (
        <div className="fixed top-20 lg:right-4 z-51 flex flex-col pointer-events-none w-full lg:w-xs">
            <AnimatePresence>
                {reversedToasts.map((toast, index) => (
                    <motion.div
                        key={toast.id}
                        layout
                        initial={{opacity: 0, y: -20, scale: 0.9}}
                        animate={{
                            opacity: index > 3 ? 0 : 1,
                            y: index * 40,
                            scale: 1 - index * 0.05,
                            zIndex: 100 - index,
                            filter: index === 0 ? "blur(0px)" : `blur(${index * 0.5}px)`,
                        }}
                        exit={{opacity: 0, scale: 0.8, transition: {duration: 0.2}}}
                        transition={{duration: 0.3, ease: "easeOut"}}
                        className="absolute w-full px-5 lg:px-0"
                        style={{transformOrigin: "top center"}}
                    >
                        <ToastItem
                            toast={toast}
                            onClose={() => removeToast(toast.id)}
                        />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}
