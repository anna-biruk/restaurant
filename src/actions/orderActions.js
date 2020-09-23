import RestoService from "../services/resto-service";

const restoService = new RestoService();


const getOrders = () => {
    return async (dispatch) => {
        const result = await restoService.getOrders();
        dispatch({type: "GET_ORDERS", payload: result})
    }

};
export {
    getOrders
}