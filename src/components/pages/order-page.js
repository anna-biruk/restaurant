import React from 'react';
import AppHeader from "../app-header/app-header";
import OrderForm from "../orderForm";
import './order-page.scss'

const OrderPage = () => {
    return (
       <div className="order-page">
           <AppHeader/>
           <OrderForm />
       </div>
    )
};

export default OrderPage;