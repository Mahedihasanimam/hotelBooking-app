import React, { useEffect } from "react";
import imagDetails from "../../assets/undraw_travel_booking_re_6umu.svg";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import RoomCard from "./RoomCard";
const Details = () => {
  const { id } = useParams(); // Fetching id parameter from route

  const { data: hotels = [] } = useQuery({
    queryKey: ["hotels"],
    queryFn: async () => {
      try {
        const response = await axios.get("/hotel.json");
        return response.data;
      } catch (error) {
        console.log(error);
      }
    },
  });
  const myhotel = hotels.find((i) => i.id === parseInt(id));
  console.log(myhotel);

  return (
    <div className="">
      <div className="py-12 px-6 lg:px-0 shadow-lg">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <img
              className="mt-12 px-12"
              src={myhotel?.image}
              alt="Travel Booking Illustration"
            />
            <div className="lg:ml-16 text-center lg:text-left">
              <h1 className="text-4xl font-bold mb-4">Book your Room now</h1>
              <p className="text-lg mb-8">
                Start your journey with us. Discover luxury accommodations and
                book your stay with ease.
              </p>
              <a
                href="#"
                className="bg-green-500 text-white py-2 px-6 rounded-sm inline-block hover:bg-gray-200 transition duration-300 ease-in-out"
              >
                Explore Rooms
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1
          className="text-4xl font-bold border-l-4  px-2 my-12 mx-4 border-green-500"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Rooms
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-4 px-4 md:grid-cols-2 lg:grid-cols-3">
        {myhotel?.rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default Details;
