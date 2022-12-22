import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import BookNowModal from '../../BookNowModal/BookNowModal';


const SingleProduct = ({ product }) => {
    const { picture, name, location, resalePrice, originalPrice, yearsOfUse, sellerName, postedTime, _id, paid, email } = product;
    let [isOpen, setIsOpen] = useState(false)
    function openModal() {
        setIsOpen(true)
    }

    const [isVerified, setIsVerified] = useState('')

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
            .catch(error => console.error(error))
    }


    useEffect(() => {
        if (email) {
            fetch(`https://assignment-12-server-theta.vercel.app/verifiedseller?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setIsVerified(data.verified)
                })
                .catch(error => console.error(error))
        }
    }, [email])
    return (
        <>
            <div className={`bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500
            ${paid && 'hidden'}`}>

                <img className="w-full h-[300px] rounded-xl bg-gray-400" src={picture} alt={name} />
                <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">{name}</h1>
                <div className="my-2">
                    <div className="flex space-x-1 items-center">
                        <p><span className='font-semibold text-lg'>Location: </span>{location}</p>
                    </div>
                    <div className="flex space-x-1 items-center">
                        <p><span className='font-semibold text-lg'>Original Price:</span> $ {originalPrice}</p>
                    </div>
                    <div className="flex space-x-1 items-center">
                        <p><span className='font-semibold text-lg'>Used For:</span> {yearsOfUse} Year</p>
                    </div>
                    <div className="flex space-x-1 items-center">
                        <p><span className='font-semibold text-lg'>Seller:</span> {sellerName} <span className='text-green-500'>{isVerified && 'Verified✔️'}</span> </p>
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
                            Report To Admin
                            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                </div>
            </div>

            <BookNowModal
                openModal={openModal}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                product={product}
            ></BookNowModal>
        </>
    );
}


export default SingleProduct;