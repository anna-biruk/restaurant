const initialState = {
    error: null,
    model: null
};
const signInReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SIGNIN_ERROR":
            return {
                ...state,
                error: action.payload,
                model: null
            };
        case"SIGNIN_SUCCESS":
            return {
                ...state,
                model: action.payload,
                error: null
            };
        default:
            return state;
    }
};

export default signInReducer;