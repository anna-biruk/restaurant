import React from 'react';
import {Modal} from 'antd';
import {connectModal} from "redux-modal";
import {connect} from "react-redux";
import './checkoutModal.scss'
import {saveOrderToDB as saveOrderToDBAction} from "../../actions";

const CheckoutModal = ({totalPrice, show, handleHide, order, saveOrderToDB}) => {

    const handleOk = () => {
        handleHide();
        saveOrderToDB();
    }
    return (
        <Modal
            title="Your order has been completed!"
            visible={show}
            onOk={handleOk}
            onCancel={handleHide}
        >
            <div className="modal-content">
                <b className='modal-title'>Please confirm your order details:</b>
                <p className='modal-item_bold'>{order.name}</p>
                <p className='modal-item_bold'> {order.address}</p>
                <p className='modal-item_bold'>{order.prefix}{order.phone}</p>
                <p className='modal-item_bold'>Total price: {totalPrice} $</p>
                <p className='modal-item'>{order.email}</p>
                <p className='modal-item'>Payment method: {order.payment}</p>
            </div>

        </Modal>
    )
};

const mapStateToProps = (state) => {
    return {
        totalPrice: state.menuReducer.totalPrice,
        order: state.menuReducer.order
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        saveOrderToDB: () => dispatch(saveOrderToDBAction())
    }

};


export default connect(mapStateToProps, mapDispatchToProps)(connectModal({name: 'checkoutModal'})(CheckoutModal))
