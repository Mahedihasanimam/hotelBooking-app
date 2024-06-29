import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const RoomCard = ({ room }) => {
  const { id, type, price, booked, description, amenities, image } = room;
const navigate=useNavigate()
  const handleBooking = (room) => {
    // Retrieve existing booked rooms from localStorage
    const bookedRooms = JSON.parse(localStorage.getItem('bookedRooms')) || [];
    // Add the current room to the array
    bookedRooms.push(room);
    // Store the updated array back into localStorage
    localStorage.setItem('bookedRooms', JSON.stringify(bookedRooms));
    Swal.fire({
      title: 'Success!',
      text: `${type} booked!`,
      icon: 'success',
      confirmButtonText: 'ok'
    });
    navigate('/mybookings')
  };

  return (
    <div>
      <div className="w-full mb-12 px-2 ">
        <div className="bg-gray-100 rounded-lg p-4">
          <h3 className="text-xl font-bold mb-2">{type}</h3>
          <p className="text-gray-700 mb-2">${price} / night</p>
          <p className="text-gray-600">{description}</p>
          <div className="flex gap-2">
            <p>Facilities:</p>
            <ul className="flex">
              {amenities.map((f, index) => (
                <li key={index} className="btn p-1 bg-green-300 hover:bg-green-500 btn-xs font-bold">
                  {f}
                </li>
              ))}
            </ul>
          </div>
         
          <button onClick={() => handleBooking(room)} className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
