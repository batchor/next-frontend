import * as React from 'react'
import { Link } from "./link"
import { Icon as IconifyIcon } from '@iconify/react'

const platformIconMap: { [key: string]: string } = {
    "github.com": "mdi:github",
    "gitlab.com": "mdi:gitlab",
    "linkedin.com": "mdi:linkedin",
    "orcid.org": "la:orcid",
    "reddit.com": "ph:reddit-logo-fill",
    "scholar.google.com": "academicons:google-scholar",
    "semanticscholar.org": "simple-icons:semanticscholar",
    "steamcommunity.com": "mdi:steam",
    "twitter.com": "mdi:twitter",
    "x.com": "prime:twitter",
    "t.me": "mdi:telegram",
    "discord.gg": "ic:baseline-discord",
}


export const Icon: React.FC<{platform: string, size?: number, className: string }> = ({ platform, className, size=20}) => {
    const iconName = platformIconMap[platform]
    return iconName ? <IconifyIcon icon={iconName} height={size} width={size} className={className} /> : null
}


export const IconList: React.FC<{
    links: string[], iconSize?: number, mx?: number, className?:string
}> = ({ links, iconSize=20, mx=2, className=""}) => {
    const icoCls = "inline text-default-600"

    const iconSizeScale: { [key: string]: number } = {
        "x.com": 0.72,
    }

    const getPlatformName = (url: string) => {
        try {
            const hostname = new URL(url).hostname
            return hostname.replace('www.', '')
        } catch {
            console.error(`Could not get social platform from URL: ${url}.`)
            return null
        }
    }

    return (
        <div className={`${className} flex items-center justify-center mt-1`}>
            {links.map((link, index) => {
                const platformName = getPlatformName(link)
                const size = platformName && platformName in iconSizeScale ? iconSize * iconSizeScale[platformName] : iconSize
                return platformName ? (
                    <Link key={index} isExternal href={link} style={{ marginLeft: `${mx}px`, marginRight: `${mx}px` }}>
                        <Icon platform={platformName} size={size} className={icoCls} />
                    </Link>
                ) : null
            })}
        </div>
    )
}

interface FooterProps {
    socials: string[],
    name: string,
    domain: string
    iconSize?: number
}


const footerLinks = [
    {
        title: "Company",
        links: [
            { name: "About Us", href: "/about" },
            { name: "Careers", href: "/careers" },
            { name: "Contact Us", href: "/contact" },
        ],
    },
    {
        title: "Support",
        links: [
            { name: "Docs", href: "/docs" },
            { name: "Terms of Use", href: "/terms" },
            { name: "Privacy Policy", href: "/privacy" },
        ],
    },
    {
        title: "Follow Us",
        links: [
            { name: "Twitter", href: "https://twitter.com" },
            { name: "Facebook", href: "https://facebook.com" },
            { name: "Instagram", href: "https://instagram.com" },
        ],
    },
]

const FooterLinks: React.FC = () => {
    return (
        <div className="w-full flex justify-around mt-4">
            {footerLinks.map((section, index) => (
                <div key={index} className="flex flex-col items-start">
                    <h4 className="font-bold mb-2">{section.title}</h4>
                    {section.links.map((link, linkIndex) => (
                        <Link key={linkIndex} href={link.href} className="mb-1">
                            {link.name}
                        </Link>
                    ))}
                </div>
            ))}
        </div>
    )
}

export const Footer: React.FC<FooterProps> = ({ socials, name, domain, iconSize=23 }) => {
    const year = new Date().getFullYear()
    return(
        <footer className="w-full flex flex-col items-center justify-center space-x-4">
            <FooterLinks />
            <div className='mt-6 flex flex-wrap items-center justify-center gap-4'>
                <div className='inline-block'>&copy;{year}&nbsp;
                    <Link
                        isExternal
                        href={`https://${domain}`}
                    >
                        <span className="text-primary">{name}</span>
                    </Link>
                </div>
                <IconList className="inline-block" links={socials} iconSize={iconSize} mx={2} />
            </div>
        </footer>
    )
}