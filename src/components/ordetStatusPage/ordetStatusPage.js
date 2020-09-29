import React, {useEffect, useState} from 'react';
import {Steps} from 'antd';
import {useParams} from 'react-router-dom';
import AppHeader from "../app-header/app-header";

import './ordetStatusPage.scss';
import {getOrderById as getOrderByIdAction} from "../../actions/orderActions";
import {connect} from "react-redux";

const {Step} = Steps;

const STEPS = {
    'pending' : 0,
    'accepted': 1,
    'delivered': 3,
}

const OrderStatusPage = ({orders, getOrderById}) => {
    const [step, setStep] = useState(null);
    const params = useParams();
    useEffect(() => {
        getOrderById(params.id)
    }, [getOrderById, params]);

    useEffect(() => {
        const thisOrder = orders && orders.find(orderItem => orderItem.id === Number.parseInt(params.id));
        if (thisOrder) {
            const step = STEPS[thisOrder.status];
            setStep(step);
        }
    }, [orders, setStep, params]);

    return (
        <div className='order-status-page__container'>
            <AppHeader/>
            <div className='order-status-page__steps'>
                {step === null && (
                    <div>
                        There is no such order
                    </div>
                )}
                { step !== null &&
                    <Steps current={step}>
                        <Step className="order-status-page__step" title="Pending"
                              description="We're working on your order"/>
                        <Step className="order-status-page__step" title="Accepted" description="Your order is accepted"/>
                        <Step className="order-status-page__step" title="Delivered"
                              description="Your order has been delivered"/>
                    </Steps>
                }
            </div>
        </div>
    )

};

const mapStateToProps = state => ({
    orders: state.orders.orders
});

const mapDispatchToProps = dispatch => ({
    getOrderById: (id) => dispatch(getOrderByIdAction(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderStatusPage);