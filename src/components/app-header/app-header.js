import React from 'react';
import cartIcon from './shopping-cart-solid.svg';
import './app-header.scss';
import {Link} from "react-router-dom";
import { connect } from 'react-redux';
const AppHeader = ({totalPrice}) => {
    return (
        <header className="header">

            <Link className='header__logo header__link' to='/'>
                <img src='/images/lol.png' alt=""/>
            </Link>
            <div className="header__link-container">
            <Link className="header__link"  to='/'>Home</Link>
            <Link className="header__link" to="/menu">Menu</Link>
            <Link className="header__link" to="/cart">
                <img className="header__cart" src={cartIcon} alt="cart"></img>
                Total: {totalPrice} $
            </Link>
            </div>

        </header>
    )
};
const mapStateToProps = ({totalPrice}) => {
    return{
        totalPrice
    }
};

export default connect(mapStateToProps)(AppHeader);