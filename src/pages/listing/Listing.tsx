import { Images } from "@/assets";
import Body from "@/components/layout/Body"
import Header from "@/components/layout/Header"
import { SlidersHorizontal, Heart, MapPin, Search, ListFilter } from "lucide-react";
import ListingCard from "./ListingCard";
import Footer from "@/components/layout/Footer";



type Listing = {
    id: string;
    title: string;
    price: string;
    location: string;
    image: string;
};

const listings: Listing[] = [
    {
        id: "1",
        title: "Modern Studio Apartment",
        price: "₦450,000/year",
        location: "Lekki Phase 1, Lagos",
        image: Images.house
    },
    {
        id: "2",
        title: "Shared Room in Duplex",
        price: "₦250,000/year",
        location: "Yaba, Lagos",
        image: Images.house,
    },
    {
        id: "3",
        title: "Modern Studio Apartment",
        price: "₦450,000/year",
        location: "Lekki Phase 1, Lagos",
        image: Images.house
    },
    {
        id: "6",
        title: "Shared Room in Duplex",
        price: "₦250,000/year",
        location: "Yaba, Lagos",
        image: Images.house,
    },
    {
        id: "7",
        title: "Modern Studio Apartment",
        price: "₦450,000/year",
        location: "Lekki Phase 1, Lagos",
        image: Images.house
    },
    {
        id: "2",
        title: "Shared Room in Duplex",
        price: "₦250,000/year",
        location: "Yaba, Lagos",
        image: Images.house,
    },
    {
        id: "8",
        title: "Modern Studio Apartment",
        price: "₦450,000/year",
        location: "Lekki Phase 1, Lagos",
        image: Images.house
    },
    {
        id: "9",
        title: "Shared Room in Duplex",
        price: "₦250,000/year",
        location: "Yaba, Lagos",
        image: Images.house,
    },
    {
        id: "10",
        title: "Modern Studio Apartment",
        price: "₦450,000/year",
        location: "Lekki Phase 1, Lagos",
        image: Images.house
    },
    {
        id: "11",
        title: "Shared Room in Duplex",
        price: "₦250,000/year",
        location: "Yaba, Lagos",
        image: Images.house,
    },
    // Add more listings...
];




const Listing = () => {
    return (
        <Body hf={true} >

            <div className="flex py-6 px-container justify-between items-center">
                <div></div>

                <div className="flex flex-col md:flex-row items-center gap-4">

                    <div className="flex gap-2 justify-center items-center border px-6 py-2 border-border rounded-4xl">
                        <ListFilter className="text-maintxt w-4 h-4" />
                        <p>Sort by:</p>
                    </div>
                    <div className="flex gap-2 justify-center items-center border px-6 py-2 border-border rounded-4xl">
                        <SlidersHorizontal className="text-maintxt w-4 h-4" />
                        <p>filter</p>
                    </div>
                    <div className="relative">
                        <Search className="text-maintxt absolute left-4 -translate-y-1/2 top-1/2 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Search location or keyword"
                            className=" border border-border pl-10 pr-4 py-2 rounded-4xl min-w-70"
                        />
                    </div>

                </div>


            </div>

            <div className="grid pb-10 mt-6 px-container grid-cols-4 items-center gap-6">
                {listings.map((listing) => (
                    <ListingCard
                        image={listing.image}
                        title={listing.title}
                        price={listing.price}
                        location={listing.location}
                    />
                ))}

            </div>

        </Body>
    )
}

export default Listing

