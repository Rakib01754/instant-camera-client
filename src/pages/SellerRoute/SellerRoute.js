import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useSeller from '../../hooks/useSeller/useSeller';

const SellerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [isSeller, sellerLoading] = useSeller(user?.email)
    let location = useLocation();
    if (loading || sellerLoading) {
        return <Loader></Loader>
    }
    if (user && isSeller) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />
};

export default SellerRoute;