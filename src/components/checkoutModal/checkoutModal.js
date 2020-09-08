import React, {Component} from 'react';
import {Modal} from 'antd';
import {connectModal} from "redux-modal";

class CheckoutModal extends Component {


    render() {
        const {show, handleHide} = this.props;

        return (
            <Modal
                title="Your order has been completed!"
                visible={show}
                onOk={handleHide}
                onCancel={handleHide}

            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        )
    }

}

export default connectModal({name: 'checkoutModal'})(CheckoutModal)
