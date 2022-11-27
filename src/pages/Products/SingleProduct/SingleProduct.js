import React, { useState } from 'react';
import BookNowModal from '../../BookNowModal/BookNowModal';
import PrivateRoute from '../../PrivateRoute/PrivateRoute';


const SingleProduct = ({ product }) => {

    let [isOpen, setIsOpen] = useState(false)
    function openModal() {
        setIsOpen(true)
    }
    const { picture, name, location, resalePrice, originalPrice, yearsOfUse, sellerName, postedTime } = product;

    return (
        <>
            <div className="bg-gray-50 border border-gray-200 rounded-lg shadow-md text-left">
                <img className="w-full mx-auto p-2 h-[300px] border bg-gray-400" src={picture} alt="" />
                <div className="px-6 py-2">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                    <>
                        <p><span className='font-semibold text-lg'>Location: </span>{location}</p>
                        <p><span className='font-semibold text-lg'>Original Price:</span> $ {originalPrice}</p>
                        <p><span className='font-semibold text-lg'>Used For:</span> {yearsOfUse} Year</p>
                        <p><span className='font-semibold text-lg'>Seller:</span> {sellerName} </p>
                        <p ><span className='font-semibold text-lg'>Posted on:</span> {postedTime}</p>
                        <p className='font-bold text-xl text-[#256D85]'><span className='font-semibold text-lg'>Price:</span> $ {resalePrice}</p>
                    </>
                    <button onClick={openModal} className="inline-flex items-center px-3 py-2 my-2 font-medium text-center text-white bg-[#256D85] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                        Book Now
                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
            </div>
            <PrivateRoute>
                <BookNowModal
                    openModal={openModal}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    product={product}
                ></BookNowModal>
            </PrivateRoute>
        </>
    );
};

export default SingleProduct;