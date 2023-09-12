import React from 'react';
import {
    Link
  } from "react-router-dom";
import logo from './images/promiselogo.png'

const NavBar = () => {

  return (
    <nav className="text-gray-900 ">
      <div className="container px-4 mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link to="/">
            <img src={logo} alt="logo" className='h-20' />
          </Link>
          <button className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex space-x-4">
          <ul className="font-bold flex space-x-4">
            <li>
              <Link to="/preMed">
                <p className="hover:text-teal-500">About</p>
              </Link>
            </li>
            <li>
              <Link to="/preMed">
                <p className="hover:text-teal-500">Services</p>
              </Link>
            </li>
            <li>
              <Link to="/preMed">
                <p className="hover:text-teal-500">Contact</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <button className="bg-blue-900 text-teal-300 px-4 py-4 rounded-md hover:bg-blue-700">
            <Link to="/preMed">
             Online Consultation
            </Link>
           
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar