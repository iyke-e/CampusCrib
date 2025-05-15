import { Icons } from "@/assets";
import React, { useState } from "react";

interface InputFieldProps {
    label?: string;
    type?: "text" | "email" | "password" | "number";
    name: string;
    placeholder?: string;
    id?: string,
    register?: any
}

const InputField: React.FC<InputFieldProps> = ({
    label,
    id,
    type = "text",
    name,
    placeholder,
    register,
    ...props
}) => {

    const [passwordVisible, setPasswordVisible] = useState(false)
    return (
        <div className="grid gap-1">
            <label className="text-sm">{label}</label>
            <div className="relative">
                <input
                    className="input"
                    placeholder={placeholder}
                    type={passwordVisible ? "text" : type}
                    {...register(name)}
                    {...props}
                />

                {
                    type === "password" && <div
                        className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2"
                        onClick={() => { setPasswordVisible(!passwordVisible) }}
                    >
                        {

                            passwordVisible
                                ? <Icons.eye className="fill-maintxt w-5" />
                                : <Icons.eyeSlash className="fill-maintxt w-5" />

                        }
                    </div>

                }


            </div>

        </div>
    );
};

export default InputField;
