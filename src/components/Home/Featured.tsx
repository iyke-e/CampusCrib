import Room from "../../assets/images/sampleroom.png"
import Button from "../../utils/Button"
import { Icons } from "@/assets"

const Featured = () => {
    return (
        <div className="my-16">
            <h2 className="text-center font-bold text-2xl mb-10">Featured Listing</h2>
            <div className="flex gap-6 justify-center items-center flex-wrap">
                {
                    Array.from({ length: 6 }, (_, i) => (
                        <div className="card" key={i}>
                            <img className="mb-4" src={Room} />
                            <div className="flex mb-2 items-center justify-between">
                                <p>Room Self Con</p>
                                <p>N250,000/year</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Icons.location className="fill-maintxt w-4" />
                                <p>Harmony Estate</p>
                            </div>

                            <div className="mt-4">
                                <Button style="w-full" type="secondary">Check Availability</Button>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="grid place-content-center mt-10">
                <Button type="outline"> View More Listings</Button>
            </div>
        </div>
    )
}

export default Featured