import React from 'react';
import Styles from './DashboardForm.module.scss';
import PropTypes from 'prop-types';

const DashboardForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={Styles.dashboardForm}>
                <div className={Styles.col}>
                    <h3>Subscribe to Alerts</h3>
                    <div>
                        <input type="checkbox" name="smsAlerts" id="smsAlerts" checked={props.smsAlerts} onChange={props.handleChange} />
                        <label htmlFor="smsAlerts">SMS Alert</label>
                    </div>
                    <div>
                        <input type="checkbox" name="markettingNews" id="markettingNews" checked={props.markettingNews} onChange={props.handleChange} />
                        <label htmlFor="markettingNews">Marketting Newsletter</label>
                    </div>
                    <div>
                        <input type="checkbox" name="flyers" id="flyers" checked={props.flyers} onChange={props.handleChange} />
                        <label htmlFor="flyers">Flyers</label>
                    </div>
                </div>

                <div className={Styles.col}>
                    <h3>{props.twoWayBinding}</h3>
                    <input type="text" name="twoWayBinding" placeholder="Enter value for two way binding" value={props.twoWayBinding} onChange={props.handleChange} />
                </div>
            </div>

            <div className={Styles.btn_container}>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

DashboardForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    smsAlerts: PropTypes.bool.isRequired,
    markettingNews: PropTypes.bool.isRequired,
    flyers: PropTypes.bool.isRequired,
    twoWayBinding: PropTypes.string.isRequired
}

export default DashboardForm;