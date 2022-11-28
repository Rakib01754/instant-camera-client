import React from 'react';
import { useQuery } from '@tanstack/react-query';
import SingleAdvertisement from './SingleAdvertisement/SingleAdvertisement';
import Loader from '../../../components/Loader/Loader';

const AdvertisedItems = () => {
    const { data: products = [], isLoading } = useQuery({
        queryKey: ['advertisedItems'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/advertised`)
            const data = await res.json()
            return data;
        }
    })
    console.log(products)
    if (isLoading) {
        <Loader></Loader>
    }
    if (products.length > 0) {
        return (
            <div className='mx-4 bg-gray-200 my-6'>
                <h1 className='text-5xl font-semibold underline py-4'>Advertisements</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-4 lg:px-10 shadow-lg'>
                    {
                        products?.map(product => <SingleAdvertisement key={product._id} product={product}></SingleAdvertisement>)
                    }

                </div>
            </div>
        );
    }
};

export default AdvertisedItems;