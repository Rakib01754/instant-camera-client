import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router-dom';
import banner2 from '../../../assets/banner2.jpg'

const Banner = () => {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${banner2})` }}
        >
            <div
                className="absolute inset-0 bg-white/75 md:bg-transparent sm:bg-gradient-to-r md:from-white/95 md:to-white/25"
            ></div>

            <div
                className="relative mx-auto px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-10"
            >
                <div className="text-center sm:text-left">
                    <h1 className="text-3xl font-extrabold sm:text-6xl">
                        Start Shopping

                        <strong className="block font-extrabold text-[#256D85] mt-3">
                            From Now.
                        </strong>
                    </h1>

                    <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
                        If you are looking for buy or sell your used camera. Then you are in right place. Here we providing you the buy and sell services. You can post your advertise here or buy a product from other seller.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4 text-center">
                        <Link
                            to='/blogs'
                            className="block w-full rounded bg-[#256D85] px-12 py-3 text-sm font-medium text-white shadow hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                        >
                            More Details
                        </Link>

                    </div>
                </div>
            </div>
        </section>


    );
};

export default Banner;