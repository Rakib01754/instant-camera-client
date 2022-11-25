import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../layout/Main/Main';
import AddProduct from '../pages/AddProduct/AddProduct';
import AllBuyers from '../pages/AllBuyers/AllBuyers';
import AllSellers from '../pages/AllSellers/AllSellers';
import Blogs from '../pages/Blogs/Blogs';
import Dashboard from '../pages/Dashboard/Dashboard';
import HomePage from '../pages/Dashboard/HomePage/HomePage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import MyBuyers from '../pages/MyBuyers/MyBuyers';
import MyOrders from '../pages/MyOrders/MyOrders';
import MyProducts from '../pages/MyProducts/MyProducts';
import Products from '../pages/Products/Products';
import Register from '../pages/Register/Register';
import ReportedItems from '../pages/ReportedItems/ReportedItems';


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
                    element: <Dashboard></Dashboard>,
                    children: [
                        {
                            path: '/dashboard',
                            element: <HomePage></HomePage>
                        },
                        {
                            path: '/dashboard/myorders',
                            element: <MyOrders></MyOrders>
                        },
                        {
                            path: '/dashboard/addproduct',
                            element: <AddProduct></AddProduct>
                        },
                        {
                            path: '/dashboard/myproducts',
                            element: <MyProducts></MyProducts>
                        },
                        {
                            path: '/dashboard/mybuyers',
                            element: <MyBuyers></MyBuyers>

                        },
                        {
                            path: '/dashboard/allsellers',
                            element: <AllSellers></AllSellers>
                        },
                        {
                            path: '/dashboard/allbuyers',
                            element: <AllBuyers></AllBuyers>
                        },
                        {
                            path: '/dashboard/reporteditems',
                            element: <ReportedItems></ReportedItems>
                        },
                    ]
                },
                {
                    path: 'blogs',
                    element: <Blogs></Blogs>
                },
                {
                    path: 'category/:categoryId',
                    element: <Products></Products>
                }

            ]
        }
    ])
    return (
        <RouterProvider router={router}></RouterProvider>
    );
};

export default Routes;