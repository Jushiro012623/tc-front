export const ShopSkeleton = () => {
    return (
        <div className="animate-pulse w-full">
            <div className="aspect-square bg-muted rounded-xl mb-2 shadow-sm" />

            <div className="space-y-1">
                <div className="bg-muted h-4 w-11/12 rounded" />

                <div className="flex items-center gap-2 py-0.5">
                    <span className="bg-muted h-3 w-12 rounded" />
                    <span className="bg-muted h-4 w-14 rounded" />
                </div>

                <div className="flex items-center gap-2 pt-0.5">
                    <span className="bg-muted h-4 w-16 rounded" />
                    <span className="bg-muted h-3 w-12 rounded" />
                </div>
            </div>
        </div>
    )
}