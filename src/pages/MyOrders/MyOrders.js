import React from 'react';
import useTitle from '../../hooks/useTitle/useTitle';

const MyOrders = () => {
    useTitle('My Orders')
    return (
        <div>
            <h1>This is my orders</h1>
        </div>
    );
};

export default MyOrders;