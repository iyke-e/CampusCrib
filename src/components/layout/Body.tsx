import { ReactNode } from "react"
import Header from "./Header"
import Footer from "./Footer"

const Body = ({ children, className, hf }: { children: ReactNode, className?: string, hf?: boolean }) => {
    return (
        <div className={`bg-background min-h-screen ${className}`}>
            {hf && <Header />}
            {children}
            {hf && <Footer />}

        </div>
    )
}

export default Body