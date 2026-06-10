export const BrandLogo = ({iconOnly = true}: { iconOnly?: boolean }) => {
    return (
        <div className="flex items-center gap-3">
            <div className="size-12 text-white rounded-xl bg-primary backdrop-blur flex items-center justify-center font-semibold">
                TC
            </div>
            {!iconOnly && <span className="font-serif text-lg font-semibold ">Triumph Co.</span>}
        </div>
    )
}