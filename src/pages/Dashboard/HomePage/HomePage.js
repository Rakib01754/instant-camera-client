import React from 'react';

const HomePage = () => {
    return (
        <section className="bg-gray-50 mx-auto flex items-center justify-center">
            <div
                className="px-4 py-32"
            >
                <div className=''>
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        <span className=''>Dear UserType,</span> <br />
                        <strong className="font-extrabold text-[#256D85] sm:block">
                            WelCome To Dashboard
                        </strong>
                    </h1>

                    <p className="mt-4 sm:text-xl sm:leading-relaxed">
                        You Can use more available option from the menu .
                    </p>
                </div>
            </div>
        </section>

    );
};

export default HomePage;