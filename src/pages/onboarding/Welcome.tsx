import { Icons } from "@/assets"
import Body from "@/components/layout/Body"
import { Link } from "react-router"

const Welcome = () => {
    return (
        <Body className="p-12">
            <Icons.logo className="path" />

            <div className="mt-20" >
                <h1 className="text-xl font-bold mb-4"> Welcome to CampusCrib! Lets get you started</h1>
                <p>What would you use the platform for</p>
            </div>

            <div className="flex mt-20 gap-6 text-center items-center justify-center">
                <Link to={"/home"}>
                    <Icons.linkedin className="w-40" />
                    <p>Find An Apartment</p>
                </Link>

                <Link to={"/onboarding/landlord"}>
                    <Icons.linkedin className="w-40" />
                    <p>Lease An Apartment</p>
                </Link>
                <Link to={"/onboarding/roommate"}>
                    <Icons.linkedin className="w-40" />
                    <p>Find Roommate</p>
                </Link>
                <Link to={"/onboarding/roommate"}>
                    <Icons.linkedin className="w-40" />
                    <p>Find Roommate and Apartment</p>
                </Link>
            </div>

        </Body>
    )
}

export default Welcome