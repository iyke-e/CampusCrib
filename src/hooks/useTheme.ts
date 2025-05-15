import { ThemeContext } from "@/context/ThemeContext"
import { useContext } from "react"


export const useTheme = () => {
    const themectx = useContext(ThemeContext);

    if (!themectx) {
        throw new Error("useTheme must be used within a ThemeProvider")
    }

    return themectx
}