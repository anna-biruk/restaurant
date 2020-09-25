const initialState = {
    error: null,
    model: null
};
const createFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_FORM_ERROR":
            return {
                ...state,
                error: action.payload,
                model: null
            };
        case"CREATE_FORM_SUCCESS":
            return {
                ...state,
                model: action.payload,
                error: null
            };
        case "CLEAR_CREATE_FORM":
            return initialState;

        default:
            return state;
    }

};

export default createFormReducer;