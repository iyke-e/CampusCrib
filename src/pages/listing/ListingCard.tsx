import React from "react";
import { MapPin, Heart } from "lucide-react";
import Button from "@/utils/Button";

type Props = {
    image: string;
    title: string;
    price: string;
    location: string;
};

const ListingCard: React.FC<Props> = ({ image, title, price, location }) => {
    return (
        <div className="card cursor-pointer bg-white dark:bg-[#222] transition-shadow hover:shadow-md">
            <div className="relative w-full h-48 overflow-hidden rounded-2xl">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
                />
                <button className="absolute top-3 right-3 bg-white/80 dark:bg-gray-800 rounded-full p-2 shadow-sm hover:scale-110 transition">
                    <Heart size={16} className="text-accent" />
                </button>
            </div>

            <div className="mt-4 space-y-1">
                <h3 className="text-lg font-semibold text-maintxt">{title}</h3>
                <p className="text-gray-700 dark:text-gray-300 font-medium">{price}</p>
                <div className="flex items-center text-sm text-subtxt">
                    <MapPin size={14} className="mr-1" />
                    <span>{location}</span>
                </div>
            </div>
            <Button style="w-full py-2 mt-4 " >View Lising</Button>


        </div>

    );
};

export default ListingCard;
