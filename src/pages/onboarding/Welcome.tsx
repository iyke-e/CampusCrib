import Avatar from "@/components/Avatar"
import Body from "@/components/layout/Body"
import Logo from "@/components/Logo"
// import { useEffect } from "react"
import { Link, } from "react-router-dom"
import useAuthStore from "@/store/authstore" // adjust this path as needed

const Welcome = () => {
    const user = useAuthStore((state) => state.user)
    // const navigate = useNavigate()

    // useEffect(() => {
    //     // You can replace this with a proper loading state if you add it to the store
    //     if (user === null) {
    //         navigate("/login", { replace: true })
    //         return
    //     }

    //     if (user?.onboarding_complete) {
    //         navigate(user.role === "landlord" ? "/landlord-dashboard" : "/student-dashboard", {
    //             replace: true,
    //         })
    //     }
    // }, [user, navigate])

    return (
        <Body className="p-12 grid grid-rows-[auto_1fr]">
            <div className="flex justify-between items-center">
                <Logo />
                <div className="flex gap-4 items-center">
                    <p className="font-semibold text-xl">Hello {user?.name?.split(" ")[0]}!</p>
                    <Avatar />
                </div>
            </div>

            <div className="self-center justify-self-center">
                <h1 className="text-4xl font-bold text-center my-4">Let's get you started</h1>
                <p className="text-center">What would you use the platform for?</p>

                <div className="grid mt-16 place-content-center">
                    <div className="grid grid-cols-2 w-200 gap-6 text-center items-center justify-center">
                        {onboardingCategory.map((item, index) => (
                            <Link
                                key={index}
                                to={item.link}
                                className="grid border hover:border-transparent hover:translate-y-1 hover:bg-maintxt/10 hover:scale-105 transition duration-200 rounded-4xl py-4 px-2 border-border place-items-center"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </Body>
    )
}

export default Welcome

const onboardingCategory = [
    {
        name: "Find an Apartment",
        link: "/"
    },
    {
        name: "Lease an Apartment",
        link: "/onboarding/landlord"
    },
    {
        name: "Find a Roommate",
        link: "/onboarding/student"
    },
    {
        name: "Find a Roommate and Apartment",
        link: "/onboarding/student"
    }
]
