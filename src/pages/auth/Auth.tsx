import { Icons } from "@/assets"
import Body from "@/components/layout/Body"
import Button from "@/utils/Button"
import { useState } from "react"
import { Link, Outlet } from "react-router"


const Auth = () => {
    const [text, setText] = useState({
        header: "Get Started Now",
        subHeading: "Enter your credentials to access your account"
    })
    return (
        <div>
            <Body className="grid grid-cols-[4fr_5fr]">
                <div className="w-full grid gap-12 grid-rows-[auto_1fr] px-12 py-9">
                    <Link className="cursor-pointer " to={"/"}>
                        <Icons.logo className="w-30 md:w-40 path" />
                    </Link>

                    <div className="self-center">
                        <h1 className="text-2xl font-semibold text-center mb-3">{text.header}</h1>
                        <p className="text-center mb-6">{text.subHeading}</p>
                        <Link to={"/google"}>
                            <Button type="outline" style="flex w-full items-center justify-center gap-4">
                                <Icons.google className="w-4 h-fit" />
                                Login with Google
                            </Button>
                        </Link>

                        <div className="flex gap-4 items-center my-4 px-10">
                            <div className="h-0.25 bg-border/40 w-full"></div><p>or</p><div className="h-0.25 bg-border/40 w-full"></div>
                        </div>
                        <Outlet context={{ setText }} />
                    </div>




                </div>
                <div className=" bg-white/20 w-full h-full  p-6">
                </div>
            </Body>

        </div>
    )
}

export default Auth