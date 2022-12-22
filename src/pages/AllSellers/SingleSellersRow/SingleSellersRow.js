import React from 'react';
import Swal from 'sweetalert2'

const SingleSellersRow = ({ seller, idx, refetch }) => {
    const { name, email, _id, verified } = seller;
    // seller delete 
    const handleDelete = id => {
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
                fetch(`https://assignment-12-server-theta.vercel.app/seller/${id}`, {
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
    const handleVerify = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Verify it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment-12-server-theta.vercel.app/seller/${id}`, {
                    method: 'PUT'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            Swal.fire(
                                'Verified!',
                                'User Is Verified Now.',
                                'success'
                            )
                            refetch()
                        }
                    })
            }
        })
    }
    return (
        <>
            <tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row text-left md:text-center">
                <td className="p-2 md:border md:border-grey-500 block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Serial</span>{idx}</td>
                <td className="p-2 md:border md:border-grey-500 block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Name</span>{name}</td>
                <td className="p-2 md:border md:border-grey-500 block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Status</span>{email}</td>
                <td className="p-2 md:border md:border-grey-500 block md:table-cell">
                    <span className="inline-block w-1/3 md:hidden font-bold">Action</span>
                    {
                        (verified) ? <button
                            className="bg-[#256D85]  text-white font-bold py-1 px-2 border border-blue-500 rounded disabled">Verified ✔️</button>
                            :
                            <button
                                onClick={() => handleVerify(_id)}
                                className="bg-[#256D85]  text-white font-bold py-1 px-2 border border-blue-500 rounded disabled">Verify user</button>
                    }
                    <button
                        onClick={() => handleDelete(_id)}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 mx-4 border border-red-500 rounded">Delete</button>
                </td>
            </tr>
        </>
    );
};

export default SingleSellersRow;