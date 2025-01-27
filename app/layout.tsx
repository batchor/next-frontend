import type { Metadata } from "next"
import { GoogleAnalytics } from '@next/third-parties/google'

import { ThemeProvider } from "@/components/theme-provider"
import { siteConfig } from "@/configs/site"
import "@/styles/globals.css"


export const metadata: Metadata = {
    title: "ScienHub",
    description: "AI-powered scientific collaboration",
    keywords: ["Scienhub", "AI", "LaTeX editor", "Journal templates"],
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className="antialiased"
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
                <GoogleAnalytics gaId={siteConfig.google.analytics} />
            </body>
        </html>
    )
}
