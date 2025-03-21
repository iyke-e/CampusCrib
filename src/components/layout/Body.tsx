import { ReactNode } from "react"

const Body = ({ children, className }: { children: ReactNode, className?: string }) => {
    return (
        <div className={`bg-background min-h-screen ${className}`}>{children}</div>
    )
}

export default Body