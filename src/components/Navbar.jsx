import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useLogout from "../hooks/useLogout";

const Navbar = () => {
  const logout = useLogout();
  const [authenticatedUser, setAuthenticatedUser] = useState(null);
  console.log(authenticatedUser);
  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    if (user) {
      setAuthenticatedUser(user);
    }
  }, []);
  const handleLogout = () => {
    logout();
  };
  const navbar = (
    <>
      <li className="mr-1">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? " text-green-500 font-bold" : "text-white"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="mr-1">
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive ? " text-green-500 font-bold" : "text-white"
          }
        >
          About Us
        </NavLink>
      </li>

      <li className="mr-1">
        <NavLink
          to={"/hotel"}
          className={({ isActive }) =>
            isActive ? " text-green-500 font-bold" : " text-white"
          }
        >
          Hotels
        </NavLink>
      </li>

      {authenticatedUser && (
        <li className="mr-1">
          <NavLink
            to={"/mybookings"}
            className={({ isActive }) =>
              isActive ? " text-green-500 font-bold" : " text-white"
            }
          >
            My Bookings
          </NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar text-white z-50 bg-black bg-opacity-30 px-8  fixed top-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {/* navitem */}
            {navbar}
          </ul>
        </div>
        <Link to={"/"} className=" lg:text-4xl text-xl">
          <span className="text-green-500">My</span>Hotel
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {/* navitem */}
          {navbar}
        </ul>
      </div>
      <div className="navbar-end">
        {authenticatedUser ? (
          <button
            onClick={handleLogout}
            className="border-2 border-slate-50 px-6 py-1 rounded-full hover:bg-green-500 hover:text-white hover:border-none"
          >
            {" "}
            <Link className="font-bold">Logout</Link>
          </button>
        ) : (
          <button className="border-2 border-slate-50 px-6 py-1 rounded-full hover:bg-green-500 hover:text-white hover:border-none">
            {" "}
            <Link to={"/login"} className="font-bold">
              Login
            </Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
