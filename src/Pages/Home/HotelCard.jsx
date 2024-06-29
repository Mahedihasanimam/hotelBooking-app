import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Link } from 'react-router-dom';
// ..
AOS.init();
const HotelCard = ({ hotel }) => {
    const {name,location,description,image,id}=hotel
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-md  hover:shadow-2xl transition-transform duration-300" data-aos="fade-up" data-aos-duration="2000">
            {/* Hotel Image */}
            <img  src={image} alt={name} className="h-64 w-full object-cover object-center hover:scale-105 transform transition-transform duration-300" />

            {/* Hotel Details */}
            <div className="p-4">
                <h2 className="text-2xl font-bold mb-2">{name}</h2>
                <p className="text-gray-600 mb-4">{location}</p>

                {/* Hotel Description (Optional) */}
                <p className="text-gray-700 mb-4">{description.slice(0,300)}</p>

              

                {/* Room Types
                <div className="border-t border-gray-200 pt-4">
                    <h3 className="text-lg font-semibold mb-2">Rooms Available</h3>
                    {rooms.map(room => (
                        <div key={room.id} className="flex items-center justify-between py-2">
                            <p className="text-gray-700">{room.type}</p>
                            <p className="text-green-500 font-semibold">${room.price} / night</p>
                        </div>
                    ))}
                </div> */}

                {/* Booking Button (Optional) */}
                <Link to={`/details/${id}`} className="bg-green-500 my-6 text-white px-4 py-2 mt-4 rounded-md hover:bg-green-600 transition duration-300">View Rooms</Link>
            </div>
        </div>
        
    );
};

export default HotelCard;
