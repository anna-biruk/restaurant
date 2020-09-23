import RestoService from "../services/resto-service";

const restoService = new RestoService();

const signIn = (login, password) => {
    return async (dispatch) => {
        try {
            const newSignIn = {
                login: login,
                password: password
            };
            const result = await restoService.signIn(newSignIn);
            console.log({...result});
            dispatch({type: "SIGNIN_SUCCESS", payload: result});
        } catch (e) {
            console.error(e.message);
            dispatch({type: "SIGNIN_ERROR", payload: e.message});
        }
    }
};
export {
    signIn
}