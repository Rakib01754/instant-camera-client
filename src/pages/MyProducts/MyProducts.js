import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Loader from '../../components/Loader/Loader';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle/useTitle';
import SingleProductRow from './SingleProductRow/SingleProductRow';

const MyProducts = () => {
    useTitle('My Products')
    const { user } = useContext(AuthContext)
    const email = user.email;

    const { data: myProducts = [], refetch, isLoading } = useQuery({
        queryKey: [' myProducts', email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myproducts?email=${email}`)
            const data = await res.json()
            return data;
        }
    })
    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div className='my-8 mx-2'>
            <h1 className='font-bold text-4xl my-4'>My Total Products : {myProducts?.length}</h1>
            <table className="min-w-full border-collapse block md:table">
                <thead className="block md:table-header-group">
                    <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative text-center">
                        <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 block md:table-cell"></th>
                        <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 block md:table-cell">Name</th>
                        <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 block md:table-cell">Status</th>
                        <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 block md:table-cell">Price</th>
                        <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 block md:table-cell">Action</th>
                    </tr>
                </thead>
                <tbody className="block md:table-row-group font-bold">
                    {
                        myProducts?.map((product, idx) => <SingleProductRow
                            key={product._id}
                            idx={idx + 1}
                            product={product}
                            refetch={refetch}
                        ></SingleProductRow>)
                    }
                </tbody>
            </table>

        </div>
    );
};

export default MyProducts;