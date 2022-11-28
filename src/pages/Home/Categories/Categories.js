import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleCategory from './SingleCategory/SingleCategory';

const Categories = () => {
    const [categories, setCategories] = useState([])
    // getting data by using axios 
    const url = "http://localhost:5000/categories"
    useEffect(() => {
        axios.get(url).then((response) => {
            setCategories(response.data);
        });
    }, [])
    if (categories) {
        return (
            <div className='mx-4 bg-gray-200 py-4 mt-4'>
                <h1 className='text-5xl font-semibold my-6 underline'>Shop By Category</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 lg:px-10'>
                    {
                        categories.map(category => <SingleCategory key={category._id} category={category}></SingleCategory>)
                    }

                </div>
            </div>
        );
    }

};

export default Categories;