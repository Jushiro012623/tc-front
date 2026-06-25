import * as React from "react";
import clsx from "clsx";

type InputState = "base" | "error" | "warning" | "success";
type InputSize = "sm" | "md" | "lg";

type ClassNames = {
    label?: string;
    description?: string;
    input?: string;
};

type InputProps = {
    label?: string;
    description?: string;
    state?: InputState;
    size?: InputSize;
    className?: string;
    classNames?: ClassNames;
    leftIcon?: React.ReactNode
} & Omit<React.ComponentPropsWithoutRef<"input">, "size">;

export const Input = ({
      label,
      state = "base",
      size = 'md',
      description,
      className,
      classNames,
      id,
      leftIcon,
      ...props
  }: InputProps) => {
    const inputId = id ?? React.useId();

    const stateClasses: Record<InputState, string> = {
        base: "",
        error: "border-red-500 focus:ring-red-500",
        warning: "border-yellow-500 focus:ring-yellow-500",
        success: "border-teal-500 focus:ring-teal-500",
    };

    const sizeClasses = {
        sm: "h-9 text-sm px-3",
        md: "h-12 text-sm px-4",
        lg: "h-14 text-base px-5",
    } satisfies Record<InputSize, string>;

    return (
        <div className="flex flex-col space-y-1">
            {label && (
                <label htmlFor={inputId} className={clsx("label", classNames?.label)}>
                    {label}
                </label>
            )}
            <div className="w-full relative">
                <input
                    id={inputId}
                    {...props}
                    className={clsx(
                        "input",
                        sizeClasses[size],
                        stateClasses[state],
                        className,
                        classNames?.input
                    )}
                />
                {leftIcon && (
                    <div className="absolute flex items-center justify-center top-1/2 -translate-y-1/2 right-5">
                        {leftIcon}
                    </div>
                )}
            </div>

            {description && (
                <p
                    className={clsx(
                        "text-xs leading-4",
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
    );
};