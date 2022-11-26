import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleProduct from './SingleProduct/SingleProduct';

const Products = () => {
    const products = useLoaderData();

    return (
        <div className='text-center'>
            <h1 className='text-5xl font-bold my-6'>Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4'>
                {
                    products.map(product => <SingleProduct key={product._id} product={product}></SingleProduct>)
                }
            </div>

        </div>
    );
};

export default Products;