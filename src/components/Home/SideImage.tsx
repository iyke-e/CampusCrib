import image from "../../assets/images/sideImage.png"

const SideImage = () => {
    return (
        <img className="hidden lg:block" src={image} />
    )
}

export default SideImage