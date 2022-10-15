import * as api from "../api";
import * as types from "../constants/actionTypes";


export const signin = (formData, navigate) => async(dispatch) => {
    try {
        // try to signin
        console.log("formData", formData);
        const { data } = await api.signIn(formData);
        dispatch({ type: types.AUTH, payload: data });

        navigate('/')
    } catch (error) {
        console.log(error);
    }
}

export const signup = (formData, navigate) => async(dispatch) => {
    try {
        // try to signup
        console.log("formData", formData);
        const { data } = await api.signUp(formData);
        dispatch({ type: types.AUTH, payload: data });

        navigate('/')
    } catch (error) {
        console.log(error);
    }
}