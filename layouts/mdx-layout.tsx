// reference: https://nextjs.org/docs/pages/building-your-application/configuring/mdx
export default function MdxLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="mx-auto prose prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-3xl prose-h1:text-center prose-h2:text-2xl prose-h3:text-xl dark:prose-headings:text-white">
            {children}
        </div>
    )
}