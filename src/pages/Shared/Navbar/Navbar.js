import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <div>
            <>
                <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-[#8BBCCC] text-black mb-3">
                    <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                            <NavLink to="/" aria-label="Back to homepage" className="flex items-center p-2">
                                <h1 className='text-2xl md:text-4xl font-bold text-white'>Instant Camera</h1>
                            </NavLink>
                            <button
                                className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                                type="button"
                                onClick={() => setNavbarOpen(!navbarOpen)}
                            >
                                <FaBars></FaBars>
                            </button>
                        </div>
                        <div
                            className={
                                "lg:flex flex-grow items-center" +
                                (navbarOpen ? " flex" : " hidden")
                            }
                            id="example-navbar-danger"
                        >
                            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto font-bold">
                                <li className="flex my-2">
                                    <NavLink to="/" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-white">Home</NavLink>
                                </li>
                                <li className="flex">
                                    <NavLink to="/dashboard" className={({ isActive }) =>
                                        isActive ? 'flex items-center px-4 -mb-1  text-[#8758FF]' : 'flex items-center px-4 -mb-1 border-b-2 border-transparent text-white'}>Dashboard</NavLink>
                                </li>
                                <li className="flex my-2">
                                    <NavLink to="/blogs" className={({ isActive }) =>
                                        isActive ? 'flex items-center px-4 -mb-1 text-[#8758FF]' : 'flex items-center px-4 -mb-1 border-b-2 border-transparent text-white'}>Blogs</NavLink>
                                </li>

                                <li className="flex">

                                    <NavLink to="/login" className="inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75">
                                        <span
                                            className="block rounded-sm bg-white px-8 py-3 text-sm font-medium hover:bg-transparent"
                                        >
                                            Login
                                        </span>

                                    </NavLink>

                                </li>

                            </ul>

                        </div>
                    </div>
                </nav>
            </>
        </div>
    );
};

export default Navbar;