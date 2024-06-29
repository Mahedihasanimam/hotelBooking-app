import React from 'react';

const HotelCard = ({ hotel }) => {
    const {name,location,description,image}=hotel
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
            {/* Hotel Image */}
            <img src={image} alt={name} className="h-64 w-full object-cover object-center" />

            {/* Hotel Details */}
            <div className="p-4">
                <h2 className="text-2xl font-bold mb-2">{name}</h2>
                <p className="text-gray-600 mb-4">{location}</p>

                {/* Hotel Description (Optional) */}
                <p className="text-gray-700 mb-4">{description}</p>

                {/* Hotel Features/Amenities (Optional) */}
                {/* <div className="flex flex-wrap mb-4">
                    {hotel.features.map((feature, index) => (
                        <div key={index} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm mr-2 mb-2">{feature}</div>
                    ))}
                </div> */}

                {/* Room Types */}
                {/* <div className="border-t border-gray-200 pt-4">
                    <h3 className="text-lg font-semibold mb-2">Rooms Available</h3>
                    {hotel.rooms.map(room => (
                        <div key={room.id} className="flex items-center justify-between py-2">
                            <p className="text-gray-700">{room.type}</p>
                            <p className="text-green-500 font-semibold">${room.price} / night</p>
                        </div>
                    ))}
                </div> */}

                {/* Booking Button (Optional) */}
                <button className="bg-green-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-green-600 transition duration-300">Book Now</button>
            </div>
        </div>
        
    );
};

export default HotelCard;
