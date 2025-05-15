import { SignupFormData, signupSchema } from "@/lib/zod/validation";
import Button from "@/utils/Button";
import { Link, useNavigate } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputField from "@/components/input/InputField";
import useAuthStore from "@/store/authstore";
import toast, { Toaster } from "react-hot-toast"

const Signup = () => {
  const {
    register, handleSubmit, formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({ resolver: zodResolver(signupSchema) });

  const { signup } = useAuthStore()
  const navigate = useNavigate()


  const onSubmit = async (data: SignupFormData) => {
    try {
      const response = await signup(data)

      if (response.success) {
        toast.success(response.message)
        navigate("/login", { replace: true })

      } else {
        toast.error(response.message)
      }
    } catch (error) {
      console.error("Signup error:", error)

    }

  };

  return (
    <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
      <Toaster position="top-right" />
      <div className="grid gap-1">
        <InputField
          label="Full Name*"
          type="text"
          placeholder="Enter Full Name"
          name="name"
          register={register}
        />
        {errors.name && <p className="error">{errors.name.message}</p>}

      </div>
      <div className="grid gap-1">
        <InputField
          label="Email*"
          type="email"
          placeholder="Enter Email-address"
          name="email"
          register={register}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}

      </div>
      <div>
        <InputField
          label="Password*"
          type="password"
          placeholder="enter Password"
          id="password"
          name="password"
          register={register}
        />
        {errors.password && <p className="error">{errors.password.message}</p>}
      </div>

      <div className="flex gap-6 items-center">
        <input id="checkbox" type="checkbox" {...register("terms")} />
        <label htmlFor="checkbox">I agree to all terms and privacy policy</label>
      </div>
      {errors.terms && <span className="error">{errors.terms.message}</span>}

      <div className="mt-5">
        <Button style="w-full" buttonType="submit" disabled={isSubmitting}>
          {isSubmitting ? "Signing up..." : "Signup"}
        </Button>
      </div>
      <div className="mt-2">
        <p className="text-center">
          Already have an account? <Link className="text-green-600 font-semibold" to="/login">Login</Link>
        </p>
      </div>
    </form>
  );
};

export default Signup;
