import { Link } from "react-router"
import Button from "@/utils/Button"
import Header from "@/components/layout/Header"
import { Images } from "@/assets"
import { useTheme } from "@/hooks/useTheme"
const Hero = () => {
    const { theme } = useTheme()
    const isDark = theme === 'dark';
    return (
        <div style={{
            backgroundImage: `
            linear-gradient( rgba(${isDark ? '26, 26, 26, 1' : '245, 245, 245, 0.8'}),
             rgba(${isDark ? '0, 0, 0, 0.5' : '245, 245, 245, 0.4'}),
             rgba(${isDark ? '26, 26, 26' : '245, 245, 245'}, 1)),
              url(${Images.housingbg})
              `,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"


        }} className="grid px-container grid-rows-[auto_1fr] h-[100dvh]">
            <Header />

            <section className="text-center  grid place-content-center">
                <h1 className="text-[40px] leading-15 md:leading-25 md:text-7xl font-bold mb-6">Find Your Spot  , <br /> Find Your  People</h1>
                <h2 className="text-xl  mb-10">The Easiest way to get a Space & Roommate</h2>
                {/* <ul className="grid items-start gap-3 mb-12">
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
            </ul> */}

                <div className="flex flex-col md:flex-row gap-6 md:justify-center md:items-center">
                    <Link to={"/listing"}>
                        <Button style="w-full">View Rentals</Button>
                    </Link>
                    <Link to={"/Roommate"}>
                        <Button style="w-full" type="secondary">Find a Roommate</Button>
                    </Link>
                </div>
            </section>
        </div>

    )
}

export default Hero