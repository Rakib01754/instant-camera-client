import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const SingleOrderRow = ({ order, idx, refetch }) => {
    const { picture, productName, _id, price, paid } = order;
    // order delete 
    const handleCancel = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment-12-server-theta.vercel.app/bookings/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            refetch()
                        }
                    })
            }
        })
    }

    // verify seller 

    return (
        <>
            <tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row text-left md:text-center">
                <td className="p-2 md:border md:border-grey-500 block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Serial</span>{idx}</td>
                <td className="p-2 md:border md:border-grey-500 block md:table-cell"><div className="avatar">
                    <div className="w-24 rounded-xl">
                        <img src={picture} alt={productName} />
                    </div>
                </div></td>
                <td className="p-2 md:border md:border-grey-500 block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Product Name</span>{productName}</td>
                <td className="p-2 md:border md:border-grey-500 block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Price</span>{price}</td>
                <td className="p-2 md:border md:border-grey-500 block md:table-cell">
                    <span className="inline-block w-1/3 md:hidden font-bold">Action</span>
                    {
                        !paid && <button
                            onClick={() => handleCancel(_id)}
                            className="bg-red-500 hover:bg-red-700  text-white font-bold py-1 px-2 border border-blue-500 rounded disabled">Cancel</button>
                    }

                    {
                        paid ?
                            <button
                                className="bg-[#256D85]  text-white font-bold py-1 px-2 mx-4 border border-red-500 rounded" disabled>Paid</button>
                            : <Link to={`payment/${_id}`}>
                                <button
                                    className="bg-[#256D85]  text-white font-bold py-1 px-2 mx-4 border border-red-500 rounded">Payment</button>
                            </Link>
                    }
                </td>
            </tr>
        </>
    );
};

export default SingleOrderRow;