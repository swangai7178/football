import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
    display: "swap",
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Nairobi Junior Cup 2026 | Where Nairobi Plays",
    description:
        "Nairobi Junior Cup 2026 — a week of competitive youth football for academies across Nairobi. U7 to U17. December 8–15, 2026.",
    keywords: [
        "Nairobi Junior Cup",
        "Nairobi football tournament",
        "youth football Kenya",
        "junior football Nairobi",
        "football academy Kenya",
        "youth football tournament",
    ],
    openGraph: {
        title: "Nairobi Junior Cup 2026",
        description:
            "Eight days of youth football, competition and unforgettable moments in Nairobi.",
        type: "website",
        locale: "en_KE",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {children}
        </body>
        </html>
    );
}