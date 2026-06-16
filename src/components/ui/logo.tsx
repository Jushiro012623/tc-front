import {useUIStore} from "#/lib/store.ts";
import clsx from "clsx";

type BrandLogoProps = {
    iconOnly?: boolean;
    size?: number;
    withBackground?: boolean
};

export const BrandLogo = ({withBackground = true, iconOnly = true, size = 48}: BrandLogoProps) => {
    const {isDarkMode} = useUIStore();

    return (
        <div className="flex items-center gap-3">
            <div
                className={clsx(
                "rounded-xl overflow-hidden p-1.5 backdrop-blur flex items-center justify-center font-semibold",
                    withBackground ? "bg-muted" : ""
                )}
                style={{
                    width: size,
                    height: size,
                }}
            >
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 292 264"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M116 98L93 101.5V165L145.5 217L198.5 165V150.5H232V179.5L145.5 264L59.5 179.5V73.5L116 63.5V98ZM187 0C208.5 1.5 259.6 8.2 292 23V51L257 100V53L164 35L163 180.5L146 197.5L129 180.5L128 35L35 53V100L0 51V23C32.4 8.2 83.5 1.5 105 0C113.8 22.4 136 27.6667 146 27.5C156 27.6667 178.2 22.4 187 0ZM232 73.5V116.5H198.5V101.5L175.5 98V63.5L232 73.5Z"
                        fill={isDarkMode ? "#ddcdc5" : "#3b2a22"}
                    />
                </svg>
            </div>

            {!iconOnly && (
                <span className="font-serif text-lg font-semibold text-primary">
                    Triumph Co.
                </span>
            )}
        </div>
    );
};