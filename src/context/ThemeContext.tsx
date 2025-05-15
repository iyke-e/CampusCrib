import React, { createContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system"

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => (void)
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {

    const [theme, setTheme] = useState<Theme>(() => {
        return (localStorage.getItem("theme") as Theme) || "system"
    })

    useEffect(() => {
        const root = document.getElementById("root")
        const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        console.log(theme)
        const appliedTheme = theme === "system" ? (systemDark ? "dark" : "light") : theme
        root?.setAttribute("class", appliedTheme)
        localStorage.setItem("theme", theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}