import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Loader from '../../components/Loader/Loader';
import useTitle from '../../hooks/useTitle/useTitle';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import SingleOrderRow from './SingleOrderRow/SingleOrderRow';

const MyOrders = () => {
    const { user } = useContext(AuthContext)
    const email = user?.email
    useTitle('My Orders')
    const { data: myorders = [], refetch, isLoading } = useQuery({
        queryKey: [' myorders', email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myorders?email=${email}`)
            const data = await res.json()
            return data;
        }
    })
    if (isLoading) {
        return <Loader></Loader>
    }
    console.log(myorders)
    return (
        <div className='my-8 mx-2'>
            <h1 className='font-bold text-4xl my-4'>My Total Orders : {myorders?.length}</h1>
            <table className="min-w-full border-collapse block md:table">
                <thead className="block md:table-header-group">
                    <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative text-center">
                        <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 block md:table-cell"></th>
                        <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 block md:table-cell">Image</th>
                        <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 block md:table-cell">Product Name</th>
                        <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 block md:table-cell">Price</th>
                        <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 block md:table-cell">Action</th>
                    </tr>
                </thead>
                <tbody className="block md:table-row-group font-bold">
                    {
                        myorders?.map((order, idx) => <SingleOrderRow
                            key={order._id}
                            idx={idx + 1}
                            order={order}
                            refetch={refetch}
                        ></SingleOrderRow>)
                    }
                </tbody>
            </table>

        </div>
    );
};

export default MyOrders;