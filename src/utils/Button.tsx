import { ReactNode } from "react"

type ButtonProps = {
    children: ReactNode,
    type?: "primary" | "secondary" | "outline" | "green",
    style?: string

}



const Button: React.FC<ButtonProps> = ({ children, style, type = "primary" }) => {
    return (
        <button className={
            `${type === "secondary"
                ? "bg-[#DCDCDC] font-semibold hover:bg-[#d6d6d6] text-[#414141]"
                : type === "outline"
                    ? "border text-maintxt border-border hover:bg-accent/8 hover:border-accent/8  dark:hover:border-white/10 dark:hover:bg-white/10 dark:hover:text-maintxt duration-300 transition-all"
                    : type === "green" ? "bg-accent"
                        : "bg-[#414141] hover:bg-[#414141ee] text-white"} font-semibold px-8 py-3 transition duration-75 rounded-xl cursor-pointer ${style}`
        }>
            {children}
        </button>

    )
}

export default Button