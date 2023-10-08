import Link from "next/link";
interface SignInButtonProps {
    children: React.ReactNode;
    href: string;
}

export default function SignInButton({
    children,
    href = "#",
}: SignInButtonProps) {
    return (
        <Link
            href={href}
            className=" text-base whitespace-nowrap flex hover:text-blue-800 text-blue-600"
        >
            {children}
        </Link>
    );
}
