import React from 'react';
import Styles from './Login.module.scss';
import PropTypes from 'prop-types';

export default function Login(props) {
    return (
        <div className={Styles.login_container}>
            {props.errorMessage ?
                (<div className={Styles.error_msg}>
                    Error: {props.errorMessage}
                </div>)
                : null
            }
            <form onSubmit={props.handleClick}>
                <div className={Styles.form_group}>
                    <label>User ID</label>
                    <input type="text" name="userid" placeholder="Enter User ID" onChange={props.handleChange} maxLength="20" minLength="8"/>
                </div>
                <div className={Styles.form_group}>
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Password" onChange={props.handleChange} maxLength="20" minLength="8" />
                </div>
                <div className={Styles.btn_container}>
                    <button type="submit">Log In</button>
                </div>
            </form>
        </div>
    )
}

Login.propTypes = {
    errorMessage: PropTypes.string,
    handleClick: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired
}