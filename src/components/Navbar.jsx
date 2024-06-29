import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

    const navbar=<>
        <li className='mr-1'><NavLink to={'/'} className={({ isActive}) => isActive ? " text-green-500 font-bold" : "text-white"
  }>Home</NavLink></li>
        <li className='mr-1'><NavLink to={'/about'} className={({ isActive}) => isActive ? " text-green-500 font-bold" : "text-white"
  }>About</NavLink></li>
        <li className='mr-1'><NavLink to={'/service'} className={({ isActive}) => isActive ? " text-green-500 font-bold" : "text-white"
  }>Service</NavLink></li>
        <li className='mr-1'><NavLink to={'/hotel'} className={({ isActive}) => isActive ? " text-green-500 font-bold" : " text-white"
  }>Hotel</NavLink></li>
      
   
    </>
    return (
        <div className="navbar text-white bg-black bg-opacity-30 px-8  fixed">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                {/* navitem */}
              {
                navbar
              }
            </ul>
          </div>
          <a className="btn btn-ghost lg:text-4xl text-xl"><span className='text-green-500'>My</span>Hotel</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
             {/* navitem */}
             {
                navbar
              }
          </ul>
        </div>
        <div className="navbar-end">
         <button className='border-2 border-slate-50 px-6 py-1 rounded-full hover:bg-green-500 hover:text-white hover:border-none'> <Link className='font-bold'>Login</Link></button>
        </div>
      </div>
    );
};

export default Navbar;