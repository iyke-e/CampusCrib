import { Icons } from "@/assets"
import { useTheme } from "@/hooks/useTheme"
import { useState } from "react"


const ThemeMode = () => {
    const [modeOpen, setModeOpen] = useState(false)
    const { setTheme, theme } = useTheme()


    return (
        <div className="right-11 bottom-8 fixed">
            <div onClick={() => setModeOpen(!modeOpen)} className={`bg-modebg/40 ${modeOpen && "opacity-100"} hover:opacity-100 transition-all duration-200 cursor-pointer opacity-40  rounded-full grid place-content-center w-12 aspect-square`} >
                {
                    theme === "light"
                        ? <Icons.sun className=" w-5  fill-maintxt" />
                        : theme === "dark"
                            ? <Icons.moon className=" w-4  fill-maintxt" /> :
                            <Icons.gear className=" w-5  fill-maintxt" />




                }
            </div>
            {
                modeOpen && <ul className="absolute before:  left-1/2 -translate-x-1/2 bg-modebg/40 rounded-2xl px-6 py-2 bottom-15 grid gap-4">

                    <li onClick={() => { setTheme("light"), setModeOpen(false) }} className={`flex font-semibold ${theme === "light" ? "opacity-100 " : "opacity-50 "} hover:opacity-100 cursor-pointer  items-center gap-2`}>
                        <Icons.sun className=" w-5  fill-maintxt" /> Light
                    </li>
                    <li onClick={() => { setTheme("dark"), setModeOpen(false) }} className={`flex font-semibold   ${theme === "dark" ? "opacity-100 " : "opacity-50 "}  hover:opacity-100 cursor-pointer items-center gap-2`}>
                        <Icons.moon className=" w-5  fill-maintxt" /> Dark
                    </li>
                    <li onClick={() => { setTheme("system"), setModeOpen(false) }} className={`flex font-semibold   ${theme === "system" ? "opacity-100 " : "opacity-50 "}  hover:opacity-100 cursor-pointer items-center gap-2`}>
                        <Icons.gear className=" w-5  fill-maintxt" /> System
                    </li >
                </ul>
            }

        </div>
    )
}

export default ThemeMode