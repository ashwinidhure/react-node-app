import { FETCH_USERS } from './types';

export const fetchTeamMembers = () => dispatch => {
    const data = {
        "customerid": "IJ101"
    }
    fetch('http://localhost:8080/team', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(res => {
            if (res.status === 201) {
                return res.json();
            }
            else {
                throw new Error("Data not found")
            }
        })
        .then(users => dispatch({
            type: FETCH_USERS,
            payload: users
        }))
        .catch(err => {
            console.log(err);
        })
}