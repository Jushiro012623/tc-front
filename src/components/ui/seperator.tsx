import clsx from "clsx";

type SeparatorProps = {
    className?: string;
};

export const SeparatorX = ({className}: SeparatorProps) => {
    return (
        <span
            className={clsx("block w-full h-px bg-border", className)}
        />
    );
};

export const SeparatorY = ({className}: SeparatorProps) => {
    return (
        <span
            className={clsx("block w-px h-full bg-border", className)}
        />
    );
};