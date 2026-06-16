import clsx from "clsx"
import React from "react"

type ChipVariant = "default" | "muted" | "outline"
type ChipSize = "sm" | "md" | "lg"

interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: ChipVariant
    size?: ChipSize
}

export function Chip({
                         variant = "default",
                         size = "md",
                         className,
                         ...props
                     }: ChipProps) {
    return (
        <span
            className={clsx(
                "inline-flex items-center rounded-full font-medium border transition-colors",
                {
                    sm: "px-2 py-0.5 text-[11px]",
                    md: "px-3 py-1 text-xs",
                    lg: "px-4 py-1.5 text-sm",
                }[size],
                {
                    default: "bg-muted text-foreground border-muted",
                    muted: "bg-transparent text-muted-foreground border-border",
                    outline: "bg-background text-foreground border-background",
                }[variant],

                className
            )}
            {...props}
        />
    )
}