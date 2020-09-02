const initialState = {
    menu: [],
    category: null,
    loading: false,
    error: false,
    items:[],
    totalPrice: 0,
    order:null

};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload,
                loading: false
            };
        case 'MENU_REQUESTED':
            return {
                ...state,
                menu: state.menu,
                loading: true
            };
        case 'MENU_ERROR':
            return {
                ...state,
                menu: state.menu,
                loading: false,
                error: true
            };
        case 'ITEM_ADD_TO_CART':
            const id=action.payload;
            const itemInd = state.items.findIndex(item => item.id === id);
            if (itemInd >= 0){
                const itemInState = state.items.find(item => item.id === id);
                const newItem = {
                    ...itemInState,
                    qtty: ++itemInState.qtty
                };

                return {
                    ...state,
                    items: [
                        ...state.items.slice(0, itemInd),
                        newItem,
                        ...state.items.slice(itemInd + 1)
                    ],
                    totalPrice: state.totalPrice + newItem.price
                }

            }

            const item = state.menu.find(item => item.id === id);
            const newItem = {
                title: item.title,
                price: item.price,
                url: item.url,
                id: item.id,
                qtty: 1
            };

            return {
                ...state,
                items: [
                    ...state.items,
                    newItem
                ],
                totalPrice: state.totalPrice + newItem.price
            };
        case 'ITEM_REMOVE_FROM_CART':
            const idx = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === idx)
            const price = state.items[itemIndex]['price'] * state.items[itemIndex]['qtty'];
            return {
                ...state,
                items: [
                    ...state.items.slice(0, itemIndex),
                    ...state.items.slice(itemIndex + 1)
                ],
                totalPrice: state.totalPrice - price
            };
        case 'CHANGE_CATEGORY':
            return {
                ...state,
                category: action.payload,
                loading: false
            };
        case 'INCREASE_QUANTITY':
            let fullPrice = 0;
            const newItems = state.items.map(item => {
                if (item.id === action.payload) {
                    return {...item, qtty: item.qtty + 1}
                }
                return item;
            });
            newItems.forEach(item => {
                fullPrice += item.price * item.qtty;

            });
            return {
                ...state,
                items: newItems,
                totalPrice: fullPrice
            };
        case 'DECREASE_QUANTITY':
            let newFullPrice = 0;
            const updatedItems = state.items.map(item => {
                if (item.id === action.payload) {
                    return {...item, qtty: item.qtty - 1}
                }
                return item;
            });
            updatedItems.forEach(item => {
                    newFullPrice += item.price * item.qtty;
            });
            return {
                ...state,
                items: updatedItems,
                totalPrice: newFullPrice
            };
        case "SAVE_ORDER":
            return {
                ...state,
                order:action.payload
            };


        default:
            return state;

    }

};
export default reducer;