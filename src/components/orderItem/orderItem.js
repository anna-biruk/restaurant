import React, {Component} from 'react';
import {Collapse} from 'antd';
import {CaretRightOutlined} from '@ant-design/icons';
import './orderItem.scss';
import {updateStatus} from "../../actions/orderActions";
import {connect} from "react-redux";

const {Panel} = Collapse;


class OrderItem extends Component {

    handleAccept = (e) => {
        e.stopPropagation();
        const {updateStatus, orderItem: {id}} = this.props;
        updateStatus({id, status: 'accepted'})
    };
    handleDecline = (e) => {
        e.stopPropagation();
        const {updateStatus, orderItem: {id}} = this.props;
        updateStatus({id, status: 'declined'})
    };
    handleDelivered = (e) => {
        e.stopPropagation();
        const {updateStatus, orderItem: {id}} = this.props;
        updateStatus({id, status: 'delivered'})
    };

    render() {
        const {orderItem: {address, name, email, prefix, phone, payment, totalPrice, status, menuItems = []}} = this.props;
        return (
            <>
                <Collapse
                    bordered={false}
                    defaultActiveKey={['0']}
                    expandIcon={({isActive}) => <CaretRightOutlined rotate={isActive ? 90 : 0}/>}
                    className="site-collapse-custom-collapse"
                >
                    <Panel header={
                        <div className='header-container'>
                            <div>
                                <div className='address_item'>{address} </div>
                                <div className='data-items'>{name}, {email}, {prefix}{phone}</div>
                            </div>
                            <div>{payment}</div>
                            {
                                totalPrice && <div> total: {totalPrice}$</div>
                            }
                            <div>{status}</div>
                            <div>
                                <input type="image" src='/images/check.png' className='check-box'
                                       onClick={this.handleAccept}/>
                                <input type='image' src='/images/shipped.png' className='delivery-box'
                                       onClick={this.handleDelivered}/>
                                <input type='image' src='/images/close.png' className='close-box'
                                       onClick={this.handleDecline}/>


                            </div>

                        </div>

                    } key="1" className="site-collapse-custom-panel">
                        {
                            menuItems && menuItems.map(menuItem => {
                                return (

                                    <div className='menuItem'>
                                        <div className='menuItem__title'>{menuItem.title} ({menuItem.qtty})</div>
                                        <div className="menuItem__price">
                                            {menuItem.price} $
                                        </div>
                                    </div>

                                )
                            })
                        }

                    </Panel>
                </Collapse>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateStatus: (data) => dispatch(updateStatus(data))
    }
};
export default connect(null, mapDispatchToProps)(OrderItem);