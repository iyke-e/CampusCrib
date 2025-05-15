import { Routes, Route, Navigate } from "react-router"
import useAuthStore from "@/store/authstore"
import Footer from "@/components/layout/Footer"
import Home from "@/pages/landing/LandingPage"
import Auth from "@/pages/auth/Auth"
import Login from "@/pages/auth/Login"
import Signup from "@/pages/auth/Signup"
import Welcome from "@/pages/onboarding/Welcome"
import ProtectedRoutes from "./ProtectedRoutes"
import Roommate from "@/pages/roommate"
import LandlordOnboarding from "@/pages/onboarding/LandlordOnboarding"

import LandlordDashboard from "@/pages/dashboard/LandlordDashboard"
import Listing from "@/pages/listing/Listing"
import StudentOnboarding from "@/pages/onboarding/StudentOnboarding"

const HomePage = () => (
    <div>
        <Home />
        <Footer />
    </div>
)

export const Router = () => {
    const user = useAuthStore((state) => state.user)

    return (
        <Routes>
            {/* Public route */}
            <Route path="/" element={user ? <Listing /> : <HomePage />} />

            {/* Auth routes under /auth */}
            <Route path="/auth" element={<Auth />}>
                <Route index element={<Navigate to="login" />} />
                <Route path="signup" element={<Signup />} />
                <Route path="login" element={<Login />} />
            </Route>

            {/* Protected routes */}
            <Route element={<ProtectedRoutes />}>
                <Route path="/listing" element={<Listing />} />
                <Route path="/roommate" element={<Roommate />} />
                <Route path="/welcome" element={<Welcome />} />
                <Route path="/landlord-dashboard" element={<LandlordDashboard />} />

                <Route path="/onboarding">
                    {/* Redirect /onboarding → /welcome */}
                    <Route index element={<Navigate to="/welcome" replace />} />

                    {/* Landlord onboarding section */}
                    <Route path="landlord" element={<LandlordOnboarding />} />

                    <Route path="student" element={<StudentOnboarding />} />
                </Route>

            </Route>

            {/* Catch-all redirect to home */}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}
