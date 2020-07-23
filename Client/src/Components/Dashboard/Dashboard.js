import React from 'react';
import ProfileImg from '../../assets/img/profile.jpg';
import Styles from './Dashboard.module.scss';
import AccountTable from './AccountTable/AccountTable';
import DashboardForm from './DashboardForm/DashboardForm';
import Modal from '../../UI/Modal/Modal';
import { connect } from 'react-redux';
import { fetchUserData } from '../../actions/userActions';
import PropTypes from 'prop-types';

class Dashboard extends React.Component {
    state = {
        twoWayBinding: 'Two Way Data Binding',
        smsAlerts: false,
        markettingNews: true,
        flyers: false,
        showModel: false
    }

    componentDidMount() {
        this.props.fetchUserData();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            showModel: true
        })
    }

    closeModel = () => {
        this.setState({
            showModel: false
        })
    }

    handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        type === 'checkbox' ?
            this.setState({
                [name]: checked
            }) :
            this.setState({
                [name]: value
            })
    }

    render() {
        const dashboardContents = this.props.user.length === 0 ? <h1>Data Not Found</h1> : (
            <React.Fragment>
                <div className={Styles.dashboardContent}>
                    <div>
                        <img src={ProfileImg} alt="Profile" className={Styles.profilePic} />
                    </div>
                    <div>
                        <h2>Welcome {this.props.name} !</h2>
                        <h4>Last Login: {this.props.lastlogin}</h4>
                    </div>
                </div>

                <hr />

                <h3>Account Balance : {this.props.balance}</h3>

                <AccountTable accountdata={this.props.accounts}/>

                <hr />

            </React.Fragment>
        )

        return (
            <div className={Styles.dashboard_container}>
                {dashboardContents}
                <DashboardForm
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    smsAlerts={this.state.smsAlerts}
                    markettingNews={this.state.markettingNews}
                    flyers={this.state.flyers}
                    twoWayBinding={this.state.twoWayBinding}
                />
                <Modal show={this.state.showModel} modelClosed={this.closeModel}>
                    <div className={Styles.modalcontent}>
                        <h4>twoWayBinding value: {this.state.twoWayBinding}</h4>
                        <h4>smsAlerts value : {this.state.smsAlerts.toString()}</h4>
                        <h4>markettingNews value : {this.state.markettingNews.toString()}</h4>
                        <h4>flyers value : {this.state.flyers.toString()}</h4>
                        <button onClick={this.closeModel}>Close</button>
                    </div>
                </Modal>
            </div>
        )
    }
}

Dashboard.propTypes = {
    user: PropTypes.any,
    name: PropTypes.string,
    lastlogin: PropTypes.string,
    balance: PropTypes.string,
    accounts: PropTypes.array
}

const mapStateToProps = state => ({
    user: state.userData.user,
    name: state.userData.user.name,
    lastlogin: state.userData.user.lastlogin,
    balance: state.userData.user.balance,
    accounts: state.userData.user.accountdata
})

export default connect(mapStateToProps, { fetchUserData })(Dashboard);