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
    if (isLoading) {
        <Loader></Loader>
    }
    if (products.length > 0) {
        return (
            <div className='mx-4'>
                <h1 className='text-5xl font-semibold text-left my-6'>Advertisements</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {
                        products?.map(product => <SingleAdvertisement key={product._id} product={product}></SingleAdvertisement>)
                    }

                </div>
            </div>
        );
    }
};

export default AdvertisedItems;