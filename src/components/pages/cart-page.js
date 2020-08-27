import React from 'react';
import CartTable from '../cart-table';
import AppHeader from "../app-header";

const CartPage = () => {
    return (
        <div className="cart">
            <AppHeader total={50}/>

            <CartTable/>
        </div>
    )
};

export default CartPage;