// import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useUser from '../../hooks/useUser/useUser';

const Dashboard = () => {
    const { loading } = useContext(AuthContext)
    const [filterdUser] = useUser();



    // const { data: filterdUser = {} } = useQuery({
    //     queryKey: ['user'],
    //     queryFn: async () => {
    //         const res = await fetch(`http://localhost:5000/user?email=${user?.email}`)
    //         const data = await res.json();
    //         return data;
    //     }
    // })
    if (loading) {
        <Loader></Loader>
    }
    return (
        <div className='flex flex-col md:flex-row'>
            <div className='w-full md:w-[20%]'>
                <div className="flex md:h-screen flex-col justify-between border-r bg-white">
                    <div className="px-4 py-6">
                        <span className="flex items-center justify-center h-10 w-full rounded-lg bg-[#256D85] text-white font-bold">Dashboard</span>

                        <nav aria-label="Main Nav" className="mt-6 flex flex-col space-y-1">
                            {
                                (filterdUser?.userType === 'Buyer') &&
                                <Link
                                    to="/dashboard/myorders"
                                    className="flex items-center rounded-lg bg-gray-100 px-4 py-2 text-gray-700"
                                >
                                    <span className="ml-3 text-sm font-medium"> My Orders </span>
                                </Link>
                            }
                            {
                                (filterdUser?.userType === 'Seller') &&
                                <>
                                    <Link
                                        to="/dashboard/addproduct"
                                        className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                    >
                                        <span className="ml-3 text-sm font-medium">Add A product</span>
                                    </Link>
                                    <Link
                                        to="/dashboard/myproducts"
                                        className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                    >
                                        <span className="ml-3 text-sm font-medium"> My Products </span>
                                    </Link>
                                    <Link
                                        to="/dashboard/mybuyers"
                                        className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                    >
                                        <span className="ml-3 text-sm font-medium">My Buyers</span>
                                    </Link>
                                </>
                            }
                            {
                                (filterdUser?.userType === 'Admin') &&
                                <>
                                    <Link
                                        to="/dashboard/allbuyers"
                                        className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                    >
                                        <span className="ml-3 text-sm font-medium">All Buyers</span>
                                    </Link>
                                    <Link
                                        to="/dashboard/allsellers"
                                        className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                    >
                                        <span className="ml-3 text-sm font-medium">All Sellers</span>
                                    </Link>
                                    <Link
                                        to="/dashboard/reporteditems"
                                        className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                    >
                                        <span className="ml-3 text-sm font-medium">Reported Items</span>
                                    </Link>

                                </>
                            }
                        </nav>
                    </div>
                </div>

            </div>
            <div className='w-full md:w-[80%] border-2'>
                <Outlet></Outlet>
            </div>
        </div>
    );
}

export default Dashboard;