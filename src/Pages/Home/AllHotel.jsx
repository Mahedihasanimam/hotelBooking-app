import { useQuery } from "@tanstack/react-query";
import axios from 'axios';
import HotelCard from "./HotelCard";

const AllHotel = () => {
    const { data: hotels = [] } = useQuery({
        queryKey: ['hotel'],
        queryFn: async () => {
            try {
                const response = await axios.get('hotel.json');
                return response.data;
            } catch (error) {
                console.log(error);
            }
        }
    });

    console.log(hotels);

    return (
        <div className="container mx-auto">
            <h1 className="text-4xl font-bold border-l-4 border-r-4 px-2 my-12 mx-4 border-green-500">All Hotels</h1>
            {/* Render hotels data */}
            <div className="  grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {hotels.map(hotel => (
                    <HotelCard key={hotel.id} hotel={hotel}/>
                ))}
            </div>
        </div>
    );
};

export default AllHotel;
