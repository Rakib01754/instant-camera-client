import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <section className='mx-4 bg-gray-200'>
            <h1 className='text-5xl font-semibold my-6 underline border-white py-4'>About Us</h1>
            <div className=" px-2 py-4 lg:px-10 border shadow-lg">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div
                        className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
                    >
                        <img
                            alt="Party"
                            src="https://i.postimg.cc/W4jzsqbH/Different-Types-of-Cameras-Featured-Studio-Binder-min.jpg"
                        />
                    </div>

                    <div className="lg:py-24">
                        <h2 className="text-3xl font-bold sm:text-4xl">Why We Are Best</h2>

                        <p className="mt-4 text-gray-600">
                            We provide best quality service for you. Different types of camera are available here. Product quality is very good . And price is reasonable. so definately you can choose us wihout any doubt.
                        </p>

                        <Link
                            to="/blogs"
                            className="mt-8 inline-flex items-center rounded border bg-[#256D85] px-8 py-3 text-white hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-bg-[#256D85] focus:outline-none focus:ring active:text-bg-[#256D85]"
                        >
                            <span className="text-sm font-medium">See More </span>

                            <svg
                                className="ml-3 h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default AboutUs;