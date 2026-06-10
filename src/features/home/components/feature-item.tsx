interface FeatureItemProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export const FeatureItem = ({
                                icon,
                                title,
                                description,
                            }: FeatureItemProps) => {
    return (
        <div className="flex gap-3 p-5 max-w-md min-w-md">
            <div>{icon}</div>

            <div className="space-y-2">
                <h5 className="font-bold font-serif text-xl">
                    {title}
                </h5>

                <p className="text-muted-foreground text-sm">
                    {description}
                </p>
            </div>
        </div>
    );
};