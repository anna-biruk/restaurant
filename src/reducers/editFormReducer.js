const initialState = {
    error: null,
    model: null
};
const editFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case "EDIT_FORM_ERROR":
            return {
                ...state,
                error: action.payload,
                model: null
            };
        case"EDIT_FORM_SUCCESS":
            return {
                ...state,
                model: action.payload,
                error: null
            };
        case 'CLEAR_EDIT_FORM':
            return initialState;
        default:
            return state;
    }
};

export default editFormReducer;