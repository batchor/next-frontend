// reference: https://nextjs.org/docs/pages/building-your-application/configuring/mdx

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { siteConfig } from "@/configs/site"

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer
                name="ScienHub"
                domain="scienhub.com"
                socials={[
                    siteConfig.socials.github,
                    siteConfig.socials.reddit,
                    siteConfig.socials.x,
                    siteConfig.socials.discord,
                    siteConfig.socials.telegram,
                ]} />
        </>
    )
}