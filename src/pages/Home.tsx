import Featured from "@/components/Home/Featured"
import Hero from "@/components/Home/Hero"
import SideImage from "@/components/Home/SideImage"



const Home = () => {
    return (
        <main className="px-container pt-16 ">
            <section className="flex items-center">
                <Hero />
                <SideImage />

            </section>
            <Featured />
        </main>
    )
}

export default Home