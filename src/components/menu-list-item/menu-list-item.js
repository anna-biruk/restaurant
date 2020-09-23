import React from 'react';
import './menu-list-item.scss';

const MenuListItem = ({menuItem, onAddToCart, onEditClick, isAdmin}) => {
    const {title, price, url, category, id} = menuItem;

    return (
        <li className="menu__item">
            <img className="menu__img" src={url} alt={title}></img>
            <div className="menu-list-item__content">
                <div className="menu__title">{title}</div>
                <div className="menu__category">Category: <span>{category}</span></div>
                <div className="menu__price">Price <span>{price}$</span></div>
                {
                    !isAdmin ? (<button onClick={(e) => {
                        e.preventDefault()
                        onAddToCart()
                    }}
                                        className="menu__btn">Add to cart
                    </button>) : (<button onClick={(e) => {
                        e.preventDefault()
                        onEditClick(id)
                    }}
                                          className="menu__btn">Edit
                    </button>)
                }

                <span className={`menu__category_${category}`}></span>
            </div>
        </li>
    )
};

export default MenuListItem;