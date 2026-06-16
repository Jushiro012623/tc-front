import React from 'react'

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
    label?: string
    rightIcon?: React.ReactNode
    wrapperClassName?: string
}

export function Select({
                           label,
                           rightIcon,
                           className = '',
                           wrapperClassName = '',
                           children,
                           ...props
                       }: SelectProps) {
    return (
        <div className={`space-y-2 ${wrapperClassName}`}>
            {label && (
                <label className="text-sm font-medium text-muted-foreground">
                    {label}
                </label>
            )}

            <div className="relative">
                <select
                    className={`
                        appearance-none
                        input
                        border-border
                        ${className}
                    `}
                    {...props}
                >
                    {children}
                </select>

                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-muted-foreground">
                    {rightIcon ?? (
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="opacity-70"
                        >
                            <path
                                d="M6 9l6 6 6-6"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    )}
                </div>
            </div>
        </div>
    )
}