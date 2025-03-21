import { Link } from "react-router"
import { Icons } from "../../assets"

const Footer = () => {
    return (
        <footer className="bg-primary px-container pt-20 pb-6">

            <div className=" md:flex justify-between mb-14  ">
                <div>
                    <Icons.logowhite />
                    <p className="max-w-110 mt-5  text-txtInverted">Campus Crib makes finding student housing easy, fast, and stress-free. Whether you're looking for a comfortable place to stay or a roommate who fits your lifestyle, our smart AI-powered platform connects you with the best options. Browse verified listings, get matched with a compatible roommate, and secure your next home—all in one place.</p>
                </div>
                <ul className="grid gap-5">
                    <li>
                        <Link className="font-bold  text-accentInverted" to={"#"}>Quick Links</Link>
                    </li>
                    <li>
                        <Link className="text-txtInverted" to={"#"}>Help Center</Link>
                    </li>
                    <li>
                        <Link className="text-txtInverted" to={"#"}>Terms of Service(Student and Guest)</Link>
                    </li>
                    <li>
                        <Link className="text-txtInverted" to={"#"}>Terms of Service(Property Listers)</Link>
                    </li>
                    <li>
                        <Link className="text-txtInverted" to={"#"}>About us</Link>
                    </li>
                </ul>

                <ul className="grid place-content-start gap-5">
                    <li className="font-bold  text-accentInverted">Socials</li>
                    <li>
                        <ul className="flex gap-4 items-center">
                            <li>
                                <Icons.facebook className={"fill-white w-4"} />
                            </li>
                            <li>
                                <Icons.whatsapp className="fill-white w-4" />
                            </li>
                            <li>
                                <Icons.instagram className="fill-white w-4" />
                            </li>
                            <li>
                                <Icons.linkedin className="fill-white w-4" />
                            </li>

                        </ul>
                    </li>
                </ul>
            </div>

            <div>
                <p className="text-center text-txtInverted">&copy;2025 campuscrib.com. All rights Reserved </p>
            </div>
        </footer>

    )
}

export default Footer