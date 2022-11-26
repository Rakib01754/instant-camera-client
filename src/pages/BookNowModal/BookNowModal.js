import React, { useContext } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const BookNowModal = ({ isOpen, setIsOpen, product }) => {
    const { user } = useContext(AuthContext)

    function closeModal() {
        setIsOpen(false)
    }

    // get booking information 
    const handleBookNow = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const productName = form.productName.value;
        const price = form.price.value;
        const location = form.location.value;
        const phone = form.phone.value;

        const bookNowData = {
            name,
            email,
            productName,
            price,
            phone,
            location
        }
        console.log(bookNowData)

    }

    return (
        <>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900 border-b-2"
                                    >
                                        Booking For A Product
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <div className="text-sm text-gray-500">
                                            <div className="w-full">
                                                <form onSubmit={handleBookNow} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                                    <div className="mb-4">
                                                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="name" type="text" defaultValue={user?.displayName} disabled />
                                                    </div>
                                                    <div className="mb-6">
                                                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="email" type="email" defaultValue={user?.email} disabled />
                                                    </div>
                                                    <div className="mb-6">
                                                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="productName" type="text" defaultValue={product?.name} disabled />
                                                    </div>
                                                    <div className="mb-6">
                                                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="price" type="number" defaultValue={product?.resalePrice} disabled />
                                                    </div>
                                                    <div className="mb-6">
                                                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="phone" type="text" placeholder='Your Phone Number' />
                                                    </div>
                                                    <div className="mb-6">
                                                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="location" type="text" placeholder='Your Location' />
                                                    </div>
                                                    <div className="mt-4">
                                                        <button
                                                            type="submit"
                                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                            onClick={closeModal}
                                                        >
                                                            Submit
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default BookNowModal;