import { NavLink } from "react-router"
import Button from "../../utils/Button"
import { Icons } from "../../assets"

const Header = () => {
    return (
        <header className="flex items-center justify-between px-container py-6">
            <div>
                <Icons.logo className="w-40 md:w-50 path" />
            </div>

            <nav className="hidden md:flex">
                <ul className="flex font-semibold items-center gap-6">
                    <li>
                        <NavLink className={"navlink"} to={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={"navlink"} to={"/Roommate"}>Roommate</NavLink>
                    </li>
                </ul>
            </nav>

            <div className="hidden md:flex gap-6  font-semibold items-center">
                <NavLink className={"navlink"} to={"/auth/login"}>Login</NavLink>
                <NavLink to={"/signup"}>
                    <Button>Signup</Button>
                </NavLink>
            </div>
        </header>
    )
}

export default Header