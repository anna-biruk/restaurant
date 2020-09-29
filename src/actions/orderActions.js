import RestoService from "../services/resto-service";

const restoService = new RestoService();


const getOrders = () => {
    return async (dispatch) => {
        const result = await restoService.getOrders();
        dispatch({type: "GET_ORDERS", payload: result})
    }

};

const getOrderById = (id) => {
    return async (dispatch) => {
        const result = await restoService.getOrderById(id);
        dispatch({type: "GET_ORDER_BY_ID", payload: result})
    }

};

const updateStatus = ({id, status}) => {
    return async (dispatch) => {
        dispatch({type: "UPDATE_ORDER_STATUS", payload: {id, status}});
        const result = await restoService.updateStatus({id, status});
        console.log(result);
    }

};
export {
    getOrders,
    updateStatus,
    getOrderById
}