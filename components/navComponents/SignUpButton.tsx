import Link from "next/link";
interface SignUpButtonProps {
    children: React.ReactNode;
    href: string;
}

export default function SignUpButton({
    children,
    href = "#",
}: SignUpButtonProps) {
    return (
        <Link
            href={href}
            className=" text-base whitespace-nowrap text-white px-4 py-1 rounded-md h-fit bg-orange-500 "
        >
            {children}
        </Link>
    );
}
