import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle/useTitle';
import SingleProduct from '../Products/SingleProduct/SingleProduct';

const AllProducts = () => {
    useTitle('Products')
    const allProducts = useLoaderData();

    return (
        <div className='text-center'>
            <h1 className='text-5xl font-bold my-6 underline'>Products</h1>
            <div className='flex justify-center items-center '>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-10 md:px-4 space-y-4 md:space-y-0'>
                {
                    allProducts.map(product => <SingleProduct key={product._id} product={product}></SingleProduct>)
                }
            </div>
        </div>
    );
};

export default AllProducts;