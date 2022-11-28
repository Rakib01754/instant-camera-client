import React from 'react';
import { Link } from 'react-router-dom';

const SingleCategory = ({ category }) => {
    const { categoryId, name, picture } = category;
    return (
        <Link to={`/category/${categoryId}`} className="group relative block bg-black shadow-lg">
            <img
                alt="Developer"
                src={picture}
                className="absolute inset-0 h-full w-full opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div className="relative p-8">
                <p className="text-3xl font-bold text-white flex items-center absolute bottom-2">{name}</p>
                <div className="mt-64">
                    <div
                        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                    >
                    </div>
                </div>
            </div>
        </Link>

    );
};

export default SingleCategory;