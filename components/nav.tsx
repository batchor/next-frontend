"use client"
import { usePathname } from "next/navigation"
import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { ModeSwitcher } from "@/components/mode-switcher"


export function MainNav() {
    const pathname = usePathname()

    return (
        <div className="mx-4 flex w-full">
            <Link href="/" className="flex items-center gap-2">
                <span className="font-bold inline-block">
                    ScienHub
                </span>
            </Link>

            <nav className="ml-auto flex items-center gap-4 text-sm xl:gap-6">
                <Link
                    href="/pricing"
                    className={cn(
                        "transition-colors hover:text-foreground/80",
                        pathname?.startsWith("/pricing") ? "text-foreground" : "text-foreground/80"
                    )}
                >
                    Pricing
                </Link>

                <Link
                    href="/docs"
                    className={cn(
                        "transition-colors hover:text-foreground/80",
                        pathname?.startsWith("/docs") ? "text-foreground" : "text-foreground/80"
                    )}
                >
                    Docs
                </Link>

                <Link
                    href="/blog"
                    className={cn(
                        "transition-colors hover:text-foreground/80",
                        pathname?.startsWith("/blog") ? "text-foreground" : "text-foreground/80"
                    )}
                >
                    Blog
                </Link>
                <ModeSwitcher />
            </nav>
        </div>
    )
}

export function MobileNav() {
    return (
        <div>Mobile Nav</div>
    )
}