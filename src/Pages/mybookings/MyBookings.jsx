import React, { useState } from "react";

const MyBookings = () => {
  // State to manage booked rooms
  const [bookedRooms, setBookedRooms] = useState(JSON.parse(localStorage.getItem('bookedRooms')) || []);

  // Function to handle removal of a booked room
  const handleRemoveBooking = (index) => {
    // Create a copy of current booked rooms array
    const updatedBookedRooms = [...bookedRooms];
    // Remove the room at specified index
    updatedBookedRooms.splice(index, 1);
    // Update state and localStorage with the new array of booked rooms
    setBookedRooms(updatedBookedRooms);
    localStorage.setItem('bookedRooms', JSON.stringify(updatedBookedRooms));
  };

  return (
    <div className="container mx-auto mt-20">
       <h1 className="text-4xl font-bold border-l-4  px-2 my-12 mx-4 border-green-500" data-aos="fade-up" data-aos-duration="1000">My Bookings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12 px-2">
        {bookedRooms.map((room, index) => (
          <div key={index} className="bg-gray-100 rounded-lg p-4">
            <h3 className="text-xl font-bold mb-2">{room.type}</h3>
            <p className="text-gray-700 mb-2">${room.price} / night</p>
            <p className="text-gray-600">{room.description}</p>
            <div className="flex gap-2 mt-2">
              <p>Facilities:</p>
              <ul className="flex">
                {room.amenities.map((amenity, idx) => (
                  <li key={idx} className="btn p-1 bg-green-300 hover:bg-green-500 btn-xs font-bold">
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>
           
            <button
              onClick={() => handleRemoveBooking(index)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg mt-4"
            >
              Remove Booking
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
