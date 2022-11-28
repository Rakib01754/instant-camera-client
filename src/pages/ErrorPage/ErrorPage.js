import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle/useTitle';

const ErrorPage = () => {
    useTitle('Page Not Fount')
    return (
        <div className="flex flex-col h-screen bg-white">
            <img
                src="https://img.freepik.com/free-vector/error-404-concept-landing-page_114360-2279.jpg?w=740&t=st=1669381475~exp=1669382075~hmac=6dbcadac9566ba1143cc9cc93cdaad4fbe85d6d47550900b0a8b2e7859443833"
                alt=""
                className="w-[30%] mx-auto"
            />

            <div className="flex items-center justify-center">
                <div className="max-w-xl px-4 py-2 mx-auto text-center">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        We can't find that page.
                    </h1>

                    <p className="mt-4 text-gray-500">
                        Try searching again, or return home to start from the beginning.
                    </p>

                    <Link
                        to="/"
                        className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-[#256D85] rounded focus:outline-none focus:ring"
                    >
                        Go Back Home
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default ErrorPage;