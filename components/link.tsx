"use client"
import NextLink, { LinkProps as NextLinkProps } from "next/link"
import React from "react"
import { sendGTMEvent } from '@next/third-parties/google'


export type LinkProps = NextLinkProps & {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
    isExternal?: boolean,
}

export function Link({ style, className, children, isExternal, ...props }: LinkProps):
React.ReactElement {
    return (
        <NextLink
            target={isExternal ? "_blank" : undefined}
            className={ `${className} hover:opacity-70 duration-500` }
            style={ style }
            onClick={() => {
                sendGTMEvent({ event: 'linkClicked', href: props.href })
                console.log(`Link clicked: ${props.href}.`)
            }}
            {...props}
        >
            {children}
        </NextLink>
    )
}