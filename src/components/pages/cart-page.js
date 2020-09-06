import React from 'react';
import CartTable from '../cart-table';
import AppHeader from "../app-header";
import Footer from "../footer";

    const CartPage = () => {
        return (
            <div className="cart">
                <AppHeader/>
                <CartTable/>
                <Footer/>
            </div>
        )
    };

export default CartPage;