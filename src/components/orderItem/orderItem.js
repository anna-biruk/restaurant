import React, {Component} from 'react';
import {Collapse} from 'antd';
import {CaretRightOutlined} from '@ant-design/icons';
import './orderItem.scss';

const {Panel} = Collapse;


export default class OrderItem extends Component {
    handleButtonClick = (e) => {
        e.stopPropagation();
    };

    render() {
        const {orderItem: {address, name, email, prefix, phone, payment, totalPrice, status, createdAt, menuItems = []}} = this.props;
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
                                <input type="image" src='/images/check.png' className='check-box'/>
                                <input type='image' src='/images/close.png' className='close-box'/>

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