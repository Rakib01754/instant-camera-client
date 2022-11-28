import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../layout/Main/Main';
import AddProduct from '../pages/AddProduct/AddProduct';
import AdminRoute from '../pages/AdminRoute/AdminRoute';
import AllBuyers from '../pages/AllBuyers/AllBuyers';
import AllSellers from '../pages/AllSellers/AllSellers';
import Blogs from '../pages/Blogs/Blogs';
import Dashboard from '../pages/Dashboard/Dashboard';
import HomePage from '../pages/Dashboard/HomePage/HomePage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import MyOrders from '../pages/MyOrders/MyOrders';
import MyProducts from '../pages/MyProducts/MyProducts';
import PrivateRoute from '../pages/PrivateRoute/PrivateRoute';
import Products from '../pages/Products/Products';
import Register from '../pages/Register/Register';
import SellerRoute from '../pages/SellerRoute/SellerRoute';
import BuyerRoute from '../pages/BuyerRoute/BuyerRoute';
import AdvertiseDetails from '../pages/Home/AdvertisedItems/AdvertiseDetails/AdvertiseDetails';
import AllProducts from '../pages/AllProducts/AllProducts';
import ReportedItems from '../pages/ReportedItems/ReportedItems';
import Payment from '../pages/Payment/Payment';


const Routes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            errorElement: <ErrorPage></ErrorPage>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: 'login',
                    element: <Login></Login>
                },
                {
                    path: 'register',
                    element: <Register></Register>
                },
                {
                    path: 'dashboard',
                    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
                    children: [
                        {
                            path: '/dashboard',
                            element: <HomePage></HomePage>
                        },
                        {
                            path: '/dashboard/myorders',
                            element: <BuyerRoute><MyOrders></MyOrders></BuyerRoute>
                        },
                        {
                            path: '/dashboard/addproduct',
                            element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
                        },
                        {
                            path: '/dashboard/myproducts',
                            element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
                        },
                        {
                            path: '/dashboard/allsellers',
                            element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
                        },
                        {
                            path: '/dashboard/allbuyers',
                            element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
                        },
                        {
                            path: '/dashboard/reporteditems',
                            element: <AdminRoute><ReportedItems></ReportedItems></AdminRoute>
                        },
                        {
                            path: '/dashboard/myorders/payment/:id',
                            loader: ({ params }) =>
                                fetch(
                                    `http://localhost:5000/dashboard/payment/${params.id}`
                                ),
                            element: <BuyerRoute><Payment></Payment></BuyerRoute>
                        }
                    ]
                },
                {
                    path: 'blogs',
                    element: <Blogs></Blogs>
                },
                {
                    path: 'allproducts',
                    loader: () => fetch(`http://localhost:5000/products`),
                    element: <PrivateRoute><AllProducts></AllProducts></PrivateRoute>
                },
                {
                    path: 'category/:categoryId',
                    loader: ({ params }) => fetch(`http://localhost:5000/products/${params.categoryId}`),
                    element: <PrivateRoute><Products></Products></PrivateRoute>
                },
                {
                    path: 'advertisement/:advertiseId',
                    loader: ({ params }) => fetch(`http://localhost:5000/advertisement/${params.advertiseId}`),
                    element: <PrivateRoute><AdvertiseDetails></AdvertiseDetails></PrivateRoute>
                }

            ]
        }
    ])
    return (
        <RouterProvider router={router}></RouterProvider>
    );
};

export default Routes;