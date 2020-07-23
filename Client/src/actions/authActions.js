import { FETCH_LOGIN, FETCH_ERROR } from './types';

export const fetchLogin = (name, password) => dispatch => {
    const data = {
        "client_id": "iJavaScript",
        "user": {
            "id": name,
            "password": password
        }
    }

    fetch('http://localhost:8080/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(res => {
            if(res.status === 201 || res.status === 200) {
                return res.json();
            }
            else {
                throw new Error("Invalid User Credentials")
            }
        })
        .then(users => dispatch({
            type: FETCH_LOGIN,
            payload: users
        }))
        .catch(err => {
            dispatch({
                type: FETCH_ERROR,
                payload: err.message
            })
        })
}