import { Navigate, Outlet } from "react-router-dom"
import useAuthStore from "@/store/authstore"

const ProtectedRoutes = () => {
    const user = useAuthStore((state) => state.user)

    // If not logged in, redirect to login page
    if (!user) {
        return <Navigate to="/auth/login" replace />
    }

    // If authenticated, allow access
    return <Outlet />
}

export default ProtectedRoutes
