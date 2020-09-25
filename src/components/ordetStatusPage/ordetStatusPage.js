import React from 'react';
import { Steps } from 'antd';
import AppHeader from "../app-header/app-header";

import './ordetStatusPage.scss';
const { Step } = Steps;

const OrderStatusPage = () => {
    return (
        <div className='order-status-page__container'>
            <AppHeader/>
            <div className='order-status-page__steps'>
                <Steps current={0} >
                    <Step className="order-status-page__step" title="Pending" description="We're working on your order" />
                    <Step className="order-status-page__step" title="Accepted" description="Your order is accepted" />
                    <Step className="order-status-page__step" title="Delivered" description="Your order has been delivered" />
                </Steps>
            </div>
        </div>
    )

};

export default OrderStatusPage;