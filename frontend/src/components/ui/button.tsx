import * as React from "react";
import clsx from "clsx";

type ButtonVariant =
    | "primary"
    | "secondary"
    | "ghost"
    | "glass"
    | "muted"
    | "bordered"
    | "destructive";

type ButtonSize = "sm" | "md" | "lg" | "icon";

type ButtonProps = {
    variant?: ButtonVariant;
    size?: ButtonSize;
    className?: string;
} & React.ComponentPropsWithoutRef<"button">;

export const Button = ({children, variant = "primary", size = "md", className, type = 'button', ...props}: ButtonProps) => {
    return (
        <button
            {...props}
            className={clsx(
                "button",
                `button--${variant}`,
                `button--${size}`,
                className
            )}
            type={type}
        >
            {children}
        </button>
    );
};