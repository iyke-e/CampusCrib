import Body from "@/components/layout/Body"
import { Images } from "../../assets"
import { Outlet } from "react-router"


const Auth = () => {
    return (
        <div>
            <Body className="grid grid-cols-2 items-center">
                <Outlet />
                <div className="w-fit  p-6">
                    <img className="" src={Images.authImg} alt="" />
                </div>
            </Body>

        </div>
    )
}

export default Auth