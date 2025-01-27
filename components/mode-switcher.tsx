"use client"
import * as React from "react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon } from "lucide-react"


export function ModeSwitcher() {
    const { theme, setTheme } = useTheme()
    function toggleTheme() {
        setTheme((theme) => (theme === "dark" ? "light" : "dark"))
    }
    console.log(`Current theme is ${theme}.`)
    return (
        <>
            <Button
                variant="ghost"
                className="group/toggle h-8 w-8 px-0"
                onClick={toggleTheme}
            >
                <SunIcon className="hidden [html.dark_&]:block" />
                <MoonIcon className="hidden [html.light_&]:block" />
                <span className="sr-only">Toggle theme</span>
            </Button>
        </>
    )
}