import { Link } from 'react-router-dom';

const SingleAdvertisement = ({ product }) => {
    console.log(product)
    const { picture, name, resalePrice, _id } = product
    return (
        <div>
            <div className="bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">

                <img className="w-full h-[300px] rounded-xl bg-gray-400" src={picture} alt={name} />
                <h1 className="mt-2 text-gray-800 text-2xl font-bold cursor-pointer">{name}</h1>
                <div className="my-4">
                    <div className="text-center">
                        <p className='font-bold text-xl text-[#256D85]'><span className='font-semibold text-lg text-black'>Price:</span> $ {resalePrice}</p>
                    </div>
                    <div className='flex gap-2 justify-between'>
                        <Link to='/allproducts'>
                            <button className="inline-flex items-center px-3 py-2 my-2 font-medium text-center text-white bg-[#256D85] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                See All Proudct
                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </button>
                        </Link>
                        <Link to={`/advertisement/${_id}`}>
                            <button className="inline-flex items-center px-3 py-2 my-2 font-medium text-center text-white bg-[#256D85] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                Details
                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SingleAdvertisement;