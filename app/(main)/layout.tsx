import type { Metadata } from "next"
import Layout from "@/layouts/main-layout"


export const metadata: Metadata = {
    title: "ScienHub",
    description: "AI-powered Scientific Collaboration",
}


export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Layout>{children}</Layout>
    )
}
