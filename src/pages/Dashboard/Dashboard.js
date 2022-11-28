// import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useAdmin from '../../hooks/useAdmin/useAdmin';
import useBuyer from '../../hooks/useBuyer/useBuyer';
import useSeller from '../../hooks/useSeller/useSeller';

const Dashboard = () => {
    const { user, loading } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    const [isBuyer] = useBuyer(user?.email)

    if (loading) {
        <Loader></Loader>
    }
    return (
        <div className='flex flex-col md:flex-row px-4 lg:px-10'>
            <div className='w-full md:w-[20%]'>
                <div className="flex md:h-screen flex-col justify-between border-r bg-white">
                    <div className="px-4 py-6">
                        <span className="flex items-center justify-center h-10 w-full rounded-lg bg-[#256D85] text-white font-bold">Dashboard</span>

                        <nav aria-label="Main Nav" className="mt-6 flex flex-col space-y-1">
                            {
                                isBuyer &&
                                <Link
                                    to="/dashboard/myorders"
                                    className="flex items-center rounded-lg hover:bg-gray-100 px-4 py-2 text-gray-700"
                                >
                                    <span className="ml-3 text-sm font-medium"> My Orders </span>
                                </Link>
                            }
                            {
                                isSeller &&
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
                                </>
                            }
                            {
                                isAdmin &&
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
                                        <span className="ml-3 text-sm font-medium">Reported Item</span>
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