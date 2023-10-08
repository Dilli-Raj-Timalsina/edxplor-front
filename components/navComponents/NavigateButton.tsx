import Link from "next/link";
interface NavigateButtonProps {
    children: React.ReactNode;
    href: string;
}

export function NavigateButton({ children, href = "#" }: NavigateButtonProps) {
    return (
        <Link
            href={href}
            className="text-sm  whitespace-nowrap md:text-base text-white"
        >
            {children}
        </Link>
    );
}
export function NavigateButtonIcon({
    children,
    href = "#",
}: NavigateButtonProps) {
    return (
        <div className="flex items-center">
            <Link href={href} className="text-sm md:text-base text-white">
                {children}
            </Link>
            <img src="/down-arrow.svg" className=" w-3 md:w-5 h-fit" />
        </div>
    );
}
