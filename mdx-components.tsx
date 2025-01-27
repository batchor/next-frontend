import type { MDXComponents } from 'mdx/types'
import {Link, type LinkProps} from '@/components/link'


export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        a: (props) => (
            <Link {...(props as LinkProps)}>
                {props.children}
            </Link>
        ),
        ...components,
    }
}
