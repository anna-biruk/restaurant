import React from 'react';
import './cart-table.scss';
import {connect} from "react-redux";
import {deleteFromCart, onDecreaseQuantityClicked, onIncreaseQuantityClicked} from "../../actions";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// eslint-disable-next-line no-unused-vars
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";

const CartTable = ({items, deleteFromCart, RestoService, onIncreaseQuantityClicked,onDecreaseQuantityClicked}) => {
    if (items.length === 0) {
        return (<div className="cart__title">Your сart is empty :( </div>)
    }
    return (
        <>
            <div className="cart__title">Your order:</div>
            <div className="cart__list">
                {
                    items.map(item => {
                        const {title, price, url, id, qtty} = item;
                        return (
                            <div key={id} className="cart__item">
                                <img src={url} className="cart__item-img" alt={''} />
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-price">{price}$ * {qtty}</div>
                               <FontAwesomeIcon onClick={()=>{
                                   onIncreaseQuantityClicked(id)
                               }} className='cart__up' icon={faChevronUp}/>
                               <FontAwesomeIcon onClick={()=>{
                                   onDecreaseQuantityClicked(id)
                               }} className='cart__down' icon={faChevronDown}/>

                                <div onClick={() => {
                                    deleteFromCart(id)
                                }} className="cart__close">&times;</div>
                            </div>

                        )
                    })
                }

            </div>
            <Link to='/order'>
                <button onClick={() => {
               // RestoService.setOrder(generateOrder(items))
            }} className="order">Order
                </button>
            </Link>
        </>
    );
};
const generateOrder = (items) => {
    const newOrder = items.map(item => {
        return {
            id: item.id,
            qtty: item.qtty
        }
    });
    return newOrder;
};
const mapStateToProps = (state) => {
    return {
        items: state.items,
        id:state.id
    }
};
const mapDispatchToProps = {
    deleteFromCart,
    onDecreaseQuantityClicked,
    onIncreaseQuantityClicked
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);