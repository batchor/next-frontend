
import { IDE } from "./ide"
import Navbar from "./nav"

export async function generateStaticParams() {
    return [{
        username: "test",
        projectname: "test",
    }]
}

const editor = () => {
    return (
        <div className="h-screen w-full flex flex-col">
            <Navbar className="h-8 bg-amber-500" />
            <IDE className="flex-1 overflow-y-auto" />
        </div>
    )
}

export default editor