import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../../hooks/useTitle/useTitle';
import BookNowModal from '../../../BookNowModal/BookNowModal';

const AdvertiseDetails = () => {
    const advertise = useLoaderData()
    const { picture, resalePrice, postedTime, sellerName, yearsOfUse, originalPrice, location, name, description, _id } = advertise
    useTitle(name)
    let [isOpen, setIsOpen] = useState(false)
    function openModal() {
        setIsOpen(true)
    }
    const reportToAdmin = (id) => {
        fetch(`https://assignment-12-server-theta.vercel.app/product/report/${id}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Product Is Reported')
                }
            })
    }
    return (
        <>
            <div className="flex justify-center my-12">
                <div className="flex flex-col md:flex-row rounded-lg bg-white shadow-lg gap-6 px-6">
                    <img className=" w-full h-96 md:h-auto md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={picture} alt="" />
                    <div className="my-2">
                        <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer text-left">{name}</h1>
                        <div className="flex space-x-1 items-center">
                            <p><span className='font-semibold text-lg'>Location: </span>{location}</p>
                        </div>
                        <div className="flex space-x-1 items-center">
                            <p><span className='font-semibold text-lg'>Description: </span>{description}</p>
                        </div>
                        <div className="flex space-x-1 items-center">
                            <p><span className='font-semibold text-lg'>Original Price:</span> $ {originalPrice}</p>
                        </div>
                        <div className="flex space-x-1 items-center">
                            <p><span className='font-semibold text-lg'>Used For:</span> {yearsOfUse} Year</p>
                        </div>
                        <div className="flex space-x-1 items-center">
                            <p><span className='font-semibold text-lg'>Seller:</span> {sellerName} </p>
                        </div>
                        <div className="flex space-x-1 items-center">
                            <p ><span className='font-semibold text-lg'>Posted on:</span> {postedTime}</p>
                        </div>
                        <div className="flex space-x-1 items-center">
                            <p className='font-bold text-xl text-[#256D85]'><span className='font-semibold text-lg'>Price:</span> $ {resalePrice}</p>
                        </div>
                        <div className='flex gap-2 justify-between'>
                            <button onClick={openModal} className="inline-flex items-center px-3 py-2 my-2 font-medium text-center text-white bg-[#256D85] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                Book Now
                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </button>
                            <button onClick={() => reportToAdmin(_id)} className="inline-flex items-center px-3 py-2 my-2 font-medium text-center text-white bg-red-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                Report to Admin
                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <BookNowModal
                openModal={openModal}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                product={advertise}
            ></BookNowModal>
        </>
    );
};

export default AdvertiseDetails;