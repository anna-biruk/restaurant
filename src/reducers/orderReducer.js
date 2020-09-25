const initialState = {
    orders: []
};


const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_ORDERS":
            return {
                ...state,
                orders: action.payload
            };

        case "UPDATE_ORDER_STATUS":
            return {
                ...state,
                orders: state.orders.map(item => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            status: action.payload.status
                        }
                    } else {
                        return item;
                    }
                })
            };
        default:
            return state
    }

};
export default ordersReducer;