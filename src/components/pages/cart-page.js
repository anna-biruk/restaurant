import React from 'react';
import CartTable from '../cart-table';
import AppHeader from "../app-header";

const CartPage = () => {
    return (
        <div className="cart">
            <AppHeader/>

            <CartTable/>
        </div>
    )
};

export default CartPage;