import { useRouter } from 'next/router'

export default function Page() {
    const router = useRouter()
    const ids = router.query['ids'] as string
    return (
        <div>
            <h1>Username: {router.query['username']}</h1>
            <h2>Ids: {ids}</h2>
        </div>
    )
}