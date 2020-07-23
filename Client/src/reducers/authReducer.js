import { FETCH_LOGIN, FETCH_ERROR } from '../actions/types';

const initialState = {
    loginData: {},
    errorData: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_LOGIN:
            return {
                ...state,
                loginData: action.payload
            }
        
        case FETCH_ERROR: 
            return {
                ...state,
                errorData: action.payload
            }

        default:
            return state;
    }
}