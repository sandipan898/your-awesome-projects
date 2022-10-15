import * as types from "../constants/actionTypes";

const AuthReducer = (state={authData: null}, action) => {
    switch (action.type) {
        case types.AUTH:
            localStorage.setItem('profile', JSON.stringify({ ...action.payload }));
            return { ...state, authData: action?.payload };

        case types.LOGOUT:
            localStorage.clear();
            return { ...state, authData: null };
    
        default:
            return state;
    }
}

export default AuthReducer;