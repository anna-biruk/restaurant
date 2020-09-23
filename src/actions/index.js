import {show} from 'redux-modal';
import RestoService from "../services/resto-service";

const restoService = new RestoService();

const menuLoaded = (newMenu) => {
    return {
        type: "MENU_LOADED",
        payload: newMenu
    }
};
const menuRequested = () => {
    return {
        type: "MENU_REQUESTED"
    }
};
const menuError = () => {
    return {
        type: "MENU_ERROR"
    }
};
const addedToCart = (id) => {
    return {
        type: "ITEM_ADD_TO_CART",
        payload: id
    }
};
const deleteFromCart = (id) => {
    return {
        type: "ITEM_REMOVE_FROM_CART",
        payload: id
    }
};
const changeCategory = (category) => {
    return {
        type: 'CHANGE_CATEGORY',
        payload: category
    }
};
const onIncreaseQuantityClicked = (id) => {
    return {
        type: 'INCREASE_QUANTITY',
        payload: id
    }
};

const onDecreaseQuantityClicked = (id) => {
    return {
        type: 'DECREASE_QUANTITY',
        payload: id
    }
};
const saveOrder = (data) => {
    return (dispatch) => {
        dispatch({type: "SAVE_ORDER", payload: data});
        dispatch(show('checkoutModal'));

    }

};
const checkout = () => {
    return (dispatch) => {
        dispatch(show('checkoutModal'));
    }
};
const saveMenuItem = (data) => {
    return async (dispatch) => {
        const result = await restoService.createMenu(data);
        dispatch({type: 'SAVE_MENUITEM', payload: result})
    }
};

const saveOrderToDB = () => {
    return async (dispatch, getState) => {
        const {menuReducer: {order, items, totalPrice}} = getState();
        const newOrder = {
            name: order.name,
            prefix: order.prefix,
            phone: order.phone,
            email: order.email,
            address: order.address,
            note: order.user.Note,
            payment: order.payment,
            menuItems: items,
            totalPrice: totalPrice
        };
        const result = await restoService.createOrder(newOrder);
        console.log({...result})
        //dispatch({type:"SAVE_ORDER", payload:data});
    }
};

export {
    menuLoaded,
    menuRequested,
    menuError,
    addedToCart,
    deleteFromCart,
    changeCategory,
    onDecreaseQuantityClicked,
    onIncreaseQuantityClicked,
    saveOrder, checkout, saveOrderToDB, saveMenuItem
};