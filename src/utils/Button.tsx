import { ReactNode } from "react";

type ButtonProps = {
    children: ReactNode;
    type?: "primary" | "secondary" | "outline" | "green";
    style?: string;
    buttonType?: "submit" | "reset" | "button";
    disabled?: boolean;
    onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
    children,
    style = "",
    buttonType = "button",
    type = "primary",
    disabled = false,
    onClick,
}) => {
    return (
        <button
            type={buttonType}
            onClick={onClick}
            disabled={disabled}
            className={`
        ${type === "secondary"
                    ? "bg-[#DCDCDC] font-semibold hover:bg-[#d6d6d6] text-[#414141]"
                    : type === "outline"
                        ? "border text-maintxt border-border hover:bg-accent/8 hover:border-accent/8 dark:hover:border-white/10 dark:hover:bg-white/10 dark:hover:text-maintxt transition-all"
                        : type === "green"
                            ? "bg-accent text-white"
                            : "bg-[#414141] hover:opacity-90 text-white"
                }
        font-semibold px-8 py-5 md:py-4 rounded-xl cursor-pointer transition duration-75
        ${style}
      `}
        >
            {children}
        </button>
    );
};

export default Button;
