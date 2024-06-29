import React from "react";

const RoomCard = ({room}) => {
    const {id,type,price,booked,description,amenities}=room
  return (
    <div>
      <div className="w-full mb-12 px-2 ">
        <div className="bg-gray-100 rounded-lg p-4">
          <h3 className="text-xl font-bold mb-2">{type}</h3>
          <p className="text-gray-700 mb-2">${price} / night</p>
          <p className="text-gray-600">{description}</p>
          <div className="flex gap-2">
          <p>facility:</p>
          {
            amenities.map(f=><li className="btn p-1 bg-green-300 hover:bg-green-500 btn-xs  font-bold">{f}</li>)
          }
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
