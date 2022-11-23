import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../layout/Main/Main';
import Blogs from '../pages/Blogs/Blogs';
import Dashboard from '../pages/Dashboard/Dashboard';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';


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
                    path: '/',
                    element: <Dashboard></Dashboard>
                },
                {
                    path: '/',
                    element: <Blogs></Blogs>
                },

            ]
        }
    ])
    return (
        <RouterProvider router={router}></RouterProvider>
    );
};

export default Routes;