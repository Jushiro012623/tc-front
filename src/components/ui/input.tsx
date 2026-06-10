import * as React from "react";
import clsx from "clsx";

type InputState = "base" | "error" | "warning" | "success";

type ClassNames = {
    label?: string;
    description?: string;
    input?: string
}

type InputProps = {
    label?: string;
    description?: string;
    state?: InputState,
    className?: string;
    classNames?: ClassNames
} & React.ComponentPropsWithoutRef<"input">

export const Input = ({label, state = "base", description, className, classNames, id, ...props}: InputProps) => {
    const inputId = id ?? React.useId();

    const stateClasses = {
        base: "",
        error: "border-red-500 focus:ring-red-500",
        warning: "border-yellow-500 focus:ring-yellow-500",
        success: "border-teal-500 focus:ring-teal-500",
    };

    return (
        <div className="flex flex-col space-y-1">
            {label && (<label htmlFor={inputId} className={clsx("label", classNames?.label)}>{label}</label>)}
            <input
                id={inputId}
                {...props}
                className={clsx(
                    "input h-12",
                    stateClasses[state],
                    className,
                    classNames?.input
                )}
            />

            {description && (
                <p
                    className={clsx(
                        "text-xs leading-4 ",
                        state === "error" && "text-red-500",
                        state === "warning" && "text-yellow-600",
                        state === "success" && "text-teal-600",
                        state === "base" && "text-muted-foreground",
                        classNames?.description
                    )}
                >
                    {description}
                </p>
            )}
        </div>
    )
}