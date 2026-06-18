import type {ForwardRefExoticComponent, RefAttributes} from "react";
import type {LucideProps} from "lucide-react";

interface FeatureItemProps {
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
    title: string;
    description: string;
    color: string;
}

export const FeatureItem = ({
    icon,
    title,
    description,
    color
                            }: FeatureItemProps) => {
    const Icon = icon;
    return (
        <div className="flex gap-3 p-5 max-w-md rounded-lg bg-muted/50">
            <div><Icon className={color} /></div>

            <div className="space-y-2">
                <h5 className="font-bold font-serif text-xl">
                    {title}
                </h5>

                <p className="leading-8 text-muted-foreground text-sm">
                    {description}
                </p>
            </div>
        </div>
    );
};