import clsx from "clsx"
import React from "react"

type BadgeVariant =
    | "default"
    | "success"
    | "info"
    | "warning"
    | "danger"
    | "muted"

type BadgeSize = "sm" | "md" | "lg"

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: BadgeVariant
    size?: BadgeSize
}

export function Badge({
                          variant = "default",
                          size = "md",
                          className,
                          ...props
                      }: BadgeProps) {
    return (
        <span
            className={clsx(
                "inline-flex items-center rounded-full font-medium",

                // SIZE
                {
                    sm: "px-2 py-0.5 text-[11px]",
                    md: "px-2.5 py-1 text-xs",
                    lg: "px-3 py-1.5 text-sm",
                }[size],

                // VARIANT
                {
                    default: "bg-primary text-primary-foreground",
                    success: "bg-green-100 text-green-700",
                    info: "bg-blue-100 text-blue-700",
                    warning: "bg-yellow-100 text-yellow-700",
                    danger: "bg-red-100 text-red-700",
                    muted: "bg-black/5 text-muted-foreground",
                }[variant],

                className
            )}
            {...props}
        />
    )
}