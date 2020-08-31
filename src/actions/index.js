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
const onIncreaseQuantityClicked=(id)=>{
    return{
        type:'INCREASE_QUANTITY',
        payload:id
    }
};

const onDecreaseQuantityClicked=(id)=>{
    return{
        type: 'DECREASE_QUANTITY',
        payload:id
    }
}
export {
    menuLoaded,
    menuRequested,
    menuError,
    addedToCart,
    deleteFromCart,
    changeCategory,
    onDecreaseQuantityClicked,
    onIncreaseQuantityClicked
};