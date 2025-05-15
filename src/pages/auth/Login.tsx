import Button from "@/utils/Button"
import { Link, useNavigate } from "react-router"
import { LoginFormData, loginSchema } from "@/lib/zod/validation"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import InputField from "@/components/input/InputField"
import useAuthStore from "@/store/authstore"
import toast from "react-hot-toast"


const Login = () => {
    const { register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginFormData>({ resolver: zodResolver(loginSchema) })
    const navigate = useNavigate()
    const { login } = useAuthStore()
    const onSubmit = async (data: LoginFormData) => {
        try {
            const response = await login(data)

            if (response.success) {
                toast.success(response.message)
                navigate("/welcome", { replace: true })
                console.log(response)

            } else {
                toast.error(response.message)
            }

        } catch (error) {
            console.error("Signup error:", error)
        }

    }
    return (

        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 ">
            <div className="grid gap-2">
                <InputField
                    label="Email*"
                    type="email"
                    placeholder="Enter Email-address"
                    name="email"
                    register={register}
                />
                {errors.email && <p className="error">{errors.email.message}</p>}

            </div>


            <div className="grid gap-1">
                <InputField
                    label="Password*"
                    type="password"
                    placeholder="enter Password"
                    id="password"
                    name="password"
                    register={register}
                />
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
            <div className="mt-5">
                <Button disabled={isSubmitting} buttonType="submit" style="w-full">Login</Button>
            </div>
            <div className="mt-2">
                <p className="text-center">Don't have an account? <Link className="text-green-600 font-semibold" to="/signup">Signup</Link></p>
            </div>

        </form>
    )
}

export default Login