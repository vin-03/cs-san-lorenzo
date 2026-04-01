import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.scss";

const manrope = Manrope({
    subsets: ["latin"],
    weight: ["400", "500", "700", "800"],
    variable: "--font-headline",
});

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-body",
});

export const metadata: Metadata = {
    title: "Centro Sportivo",
    description: "Sito ufficiale",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="it">
            <head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className={`${manrope.variable} ${inter.variable}`}>
                {children}
            </body>
        </html>
    );
}
