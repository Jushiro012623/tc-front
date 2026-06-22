import {type Toast, TOAST_DURATION} from "#/lib/store/useToastStore.ts";
import clsx from "clsx";
import {BiX} from "react-icons/bi";
import {CheckCircle, CircleAlert, InfoIcon} from "lucide-react";

interface ToastItemProps {
    toast: Toast;
    onClose: () => void;
}

export function ToastItem({toast, onClose}: ToastItemProps) {
    const progress = Math.max(
        0,
        100 - ((Date.now() - toast.createdAt) / TOAST_DURATION) * 100
    );

    return (
        <div
            className={clsx(
                "toast w-full overflow-hidden pointer-events-auto rounded-xl px-4 pt-3 pb-4 shadow-lg",
                `toast__${toast.type}`
            )}
        >
            <div className="flex items-center gap-3 w-full">
                <div
                    className={clsx(
                        "shrink-0 mt-0.5",
                        `toast-title__${toast.type}`
                    )}
                >
                    {toast.type === "success" && <CheckCircle size={18}/>}
                    {toast.type === "info" && <InfoIcon size={18}/>}
                    {toast.type === "error" && <CircleAlert size={18}/>}
                </div>

                <div className="flex-1 min-w-0">
                    <p
                        className={clsx(
                            "text-sm font-semibold tracking-tight",
                            `toast-title__${toast.type}`
                        )}
                    >
                        {toast.title}
                    </p>

                    {toast.description && (
                        <p
                            className={clsx(
                                "text-xs mt-1 leading-relaxed",
                                `toast-desc__${toast.type}`
                            )}
                        >
                            {toast.description}
                        </p>
                    )}
                </div>

                <button
                    onClick={onClose}
                    className={clsx(
                        "shrink-0 rounded-md p-1 opacity-50 hover:opacity-100 transition-all cursor-pointer",
                        `toast-x__${toast.type}`
                    )}
                    aria-label="Close notification"
                >
                    <BiX size={18}/>
                </button>
            </div>

            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-0.75 bg-black/5 dark:bg-white/5">
                <div
                    className={clsx(
                        "h-full",
                        `toast-__${toast.type}`.replace('text-', 'bg-')
                    )}
                    style={{
                        width: `${progress}%`,
                        backgroundColor: "currentColor",
                    }}
                />
            </div>
        </div>
    );
}