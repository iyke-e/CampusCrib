import { Link } from "react-router"
import Button from "@/utils/Button"
import { Icons } from "@/assets"
const Hero = () => {
    return (
        <section>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Find Your Spot, <br /> Find Your People</h1>
            <h2 className="text-2xl mb-6 font-bold">The Easiest way to get a Space & Roommate</h2>
            <ul className="grid items-start gap-3 mb-12">
                <li className="flex gap-4 items-center">
                    <Icons.greencheck className="w-8" />
                    <p>Browse Verified Listings: Find hostels & apartments that fit your budget and style.</p>
                </li>
                <li className="flex gap-4 items-center">
                    <Icons.greencheck className="w-8" />
                    <p> AI-Powered Roommate Matching - Get paired with someone who shares your vibe, schedule, and preferences.</p>
                </li>
                <li className="flex gap-4 items-center">
                    <Icons.greencheck className="w-8" />
                    <p>Secure & Easy Booking - Contact landlords and secure your spot in just a few clicks.</p>
                </li>
                <li>
                    <p>Find your perfect match today and move  stress-Free</p>
                </li>
            </ul>

            <div className="flex gap-6 items-center">
                <Link to={"/listings"}>
                    <Button>View Rentals</Button>
                </Link>
                <Link to={"/rormmate"}>
                    <Button type="secondary">Find a Roommate</Button>
                </Link>
            </div>
        </section>
    )
}

export default Hero