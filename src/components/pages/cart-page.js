import React from 'react';
import CartTable from '../cart-table';
import AppHeader from "../app-header";
import Footer from "../footer";

    const CartPage = () => {
        return (
            <>
            <div className="cart">
                <AppHeader/>
                <CartTable/>
            </div>
                <Footer/>

            </>
                   )
    };

export default CartPage;