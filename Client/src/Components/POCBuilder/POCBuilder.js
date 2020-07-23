import React, { Component } from 'react';
import './POCBuilder.scss';
import Login from '../Login/Login';
import RoutingContainer from '../RoutingContainer/RoutingContainer';
import { connect } from 'react-redux';
import { fetchLogin } from '../../actions/authActions';
import PropTypes from 'prop-types';

class POCBuilder extends Component {
    state = {
        userid: '',
        password: '',
        isInvalid: true
    }

    handleChange = (e) => {
        const { name, value } = e.target;

        if(value !== '') {
            this.setState({
                [name]: value
            })
        }
    }

    handleLogin = (e) => {
        e.preventDefault();
        if (window.sessionStorage && !sessionStorage.getItem('userIsAuthenticated')) {
            this.props.fetchLogin(this.state.userid, this.state.password);
            if (this.props.login.isAuthenticated) {
                sessionStorage.setItem('userIsAuthenticated', this.props.login.isAuthenticated);
            }
        }
    }

    render() {
        let pageContent;
        if (sessionStorage.getItem('userIsAuthenticated')) {
            pageContent = <RoutingContainer />;
        } else {
            pageContent = <Login errorMessage={this.props.error} handleChange={this.handleChange} handleClick={this.handleLogin} />;
        }

        return (
            <div>
                {pageContent}
            </div>
        );
    }
}

POCBuilder.propTypes = {
    login: PropTypes.object.isRequired,
    error: PropTypes.string
}

const mapStateToProps = state => ({
    login: state.login.loginData,
    error: state.login.errorData
})

export default connect(mapStateToProps, { fetchLogin })(POCBuilder);