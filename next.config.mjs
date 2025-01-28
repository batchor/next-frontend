import createMDX from '@next/mdx'
import remarkMath from "remark-math"
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import rehypeMathjax from "rehype-mathjax"
import rehypeSlug from 'rehype-slug'


/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    trailingSlash: false,
    pageExtensions: ["ts", "tsx", "mdx"],
};


const withMDX = createMDX({
    extension: /\.mdx$/,
    options: {
        remarkPlugins: [remarkParse, remarkMath, remarkGfm],
        rehypePlugins: [rehypeMathjax, rehypeSlug],
    },
})

export default withMDX(nextConfig)
