import { NavLink, Link } from "react-router-dom";
import Button from "../../utils/Button";
import { Icons } from "../../assets";
import Avatar from "../Avatar";
import useAuthStore from "@/store/authstore";
import { useState } from "react"; // Import useState for handling mobile menu toggle
import { Menu, X } from "lucide-react"; // Import Lucide React icons

const Header = ({ nav = true }: { nav?: boolean }) => {
    const user = useAuthStore((state) => state.user);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control mobile menu visibility

    // Toggle mobile menu
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="flex items-center px-container justify-between py-2">
            <Link className="cursor-pointer" to={"/"}>
                <Icons.logo className="w-40 md:w-40 path" />
            </Link>

            {/* Mobile menu button (Hamburger icon) */}
            <button
                className="md:hidden flex items-center"
                onClick={toggleMenu}
            >
                {isMenuOpen ? (
                    <X className="w-6 h-6" /> // Close icon from Lucide React
                ) : (
                    <Menu className="w-6 h-6" /> // Hamburger menu icon from Lucide React
                )}
            </button>

            {/* Navigation (visible on medium screens and up) */}
            {nav && (
                <nav className="hidden md:flex">
                    <ul className="flex font-semibold items-center gap-6">
                        <li>
                            {/* Ensure 'Home' is always active */}
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "navlink active" : "navlink"
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="navlink" to="/roommate">
                                Roommate
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            )}

            {/* Mobile menu (visible on smaller screens) */}
            {nav && isMenuOpen && (
                <nav className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-10">
                    <ul className="flex flex-col font-semibold items-center gap-6 py-4">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "navlink active" : "navlink"
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="navlink" to="/roommate">
                                Roommate
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            )}

            {/* User Info Section */}
            <div className="hidden md:flex gap-6 font-semibold items-center">
                {!user ? (
                    <>
                        <NavLink className={"navlink"} to="/login">
                            Login
                        </NavLink>
                        <NavLink to="/signup">
                            <Button>Signup</Button>
                        </NavLink>
                    </>
                ) : (
                    <div className="flex items-center gap-3">
                        <p className=" ">Hello {user?.name?.split(" ")[0]}!</p>
                        <Avatar />
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
