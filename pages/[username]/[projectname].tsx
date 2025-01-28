import { useRouter } from 'next/router'

export default function Page() {
    const router = useRouter()
    return (
        <div>
            <h1>Username: {router.query['username']}</h1>
            <h1>projectname: {router.query['projectname']}</h1>
        </div>
    )
}