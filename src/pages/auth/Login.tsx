import { Icons } from "../../assets"
import Button from "@/utils/Button"
import { Link } from "react-router"

const Login = () => {
    return (
        <div className="w-full px-12 pt-20">
            <Icons.logo className="path absolute top-12 left-12" />
            <h1 className="text-2xl font-bold text-center mb-3">Get Started Now</h1>
            <p className="text-center mb-12">Enter your credentials to access your account</p>
            <Link to={"/google"}>
                <Button type="outline" style="flex w-full items-center justify-center gap-4">
                    <Icons.google className="w-4 h-fit" />
                    Login with Google
                </Button>
            </Link>

            <div className="flex gap-4 items-center my-8 px-10">
                <div className="h-0.25 bg-border/40 w-full"></div><p>or</p><div className="h-0.25 bg-border/40 w-full"></div>
            </div>

            <div className="grid gap-4 ">

                <div className="grid gap-2" >
                    <label htmlFor="name">Email*</label>
                    <input className="input" placeholder="Enter Email-address" type="text" />
                </div>
                <div className="grid gap-2">
                    <label htmlFor="name">Password*</label>
                    <input placeholder="Enter password" className="input" type="text" />
                </div>

                <div className="flex items-center gap-4 justify-between">
                    <div className="flex gap-4 items-center">
                        <label className="w-6 h-6 block border cursor-pointer rounded-lg border-border" htmlFor="checkbox"></label>
                        <input className="-left-99999999 absolute" type="checkbox" />
                        <p>Remember Me</p>
                    </div>
                    <div>
                        <Link className="text-green-600 font-semibold" to={"/forgotPassword"}>Forgot Password?</Link>
                    </div>

                </div>


            </div>

            <div className="mt-8">
                <Link to={"/welcome"}>
                    <Button style="w-full">Login</Button>
                </Link>
            </div>

            <div className="mt-4">
                <p className="text-center">Don't have an account? <Link className="text-green-600 font-semibold" to="/auth/signup">Signup</Link></p>
            </div>


        </div>
    )
}

export default Login