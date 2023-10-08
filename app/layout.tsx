import NavBarTop from "@/components/navComponents/NavBarTop";
import "./globals.css";
import type { Metadata } from "next";
import NavBarBelow from "@/components/navComponents/NavBarBelow";

export const metadata: Metadata = {
    title: "edxplore",
    description: "The is a Dummy Description .",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="overflow-x-hidden">
                <NavBarTop></NavBarTop>
                <NavBarBelow></NavBarBelow>
                {children}
            </body>
        </html>
    );
}
