import React from 'react';
import AppHeader from "../app-header/app-header";
import OrderForm from "../orderForm";
import './order-page.scss'
import Footer from "../footer";

const OrderPage = () => {
    return (
        <>
       <div className="order-page">
           <AppHeader/>
           <OrderForm/>
       </div>
            <Footer/>

        </>    )
};

export default OrderPage;