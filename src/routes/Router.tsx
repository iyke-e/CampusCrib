import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import Home from "@/pages/Home"
import Auth from "@/pages/auth/Auth"
import Login from "@/pages/auth/Login"
import Signup from "@/pages/auth/Signup"
import Welcome from "@/pages/onboarding/Welcome"
import { Routes, Route, Navigate } from "react-router"


const HomePage = () => {
    return (
        <div className="bg-background">
            <Header />
            <Home />
            <Footer />
        </div>
    )
}


export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/auth" element={<Auth />}>
                <Route index element={<Navigate to={"login"} />} />
                <Route path="signup" element={<Signup />} />
                <Route path="login" element={<Login />} />
            </Route>
            <Route path="/welcome" element={<Welcome />} />
        </Routes>
    )
}
