import { Icons } from "@/assets"
import { Link } from "react-router"

const Logo = () => {
    return (
        <Link className="cursor-pointer" to={"/"}>
            <Icons.logo className="w-40 md:w-50 path" />
        </Link>
    )
}

export default Logo