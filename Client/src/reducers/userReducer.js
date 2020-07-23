import { FETCH_USER_DATA } from '../actions/types';

const initialState = {
    user: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_USER_DATA:
            return {
                ...state,
                user: {
                    name: action.payload.name,
                    lastlogin: action.payload.last_login,
                    balance: action.payload.balance,
                    accountdata: action.payload.transaction
                }
            }

        default:
            return state;
    }
}