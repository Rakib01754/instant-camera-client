import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useBuyer from '../../hooks/useBuyer/useBuyer';

const BuyerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [isBuyer, buyerLoading] = useBuyer(user?.email)
    let location = useLocation();
    if (loading || buyerLoading) {
        return <Loader></Loader>
    }
    if (user && isBuyer) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />
};

export default BuyerRoute;