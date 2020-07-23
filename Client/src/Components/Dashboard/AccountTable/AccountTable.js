import React from 'react';
import Styles from './AccountTable.module.scss';
import PropTypes from 'prop-types';

export default function AccountTable(props) {
    return (
        <table className={Styles.account_table}>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.accountdata === undefined || props.accountdata.length === 0 
                        ? 
                        <tr>
                            <td colSpan="3" style={{textAlign: 'center'}}>Loading...</td>
                        </tr> 
                        :
                        props.accountdata.map((data, i) => (
                            <tr key={i}>
                                <td>{data.date}</td>
                                <td>{data.desc}</td>
                                <td>{data.amount}</td>
                            </tr>
                        ))
                }
            </tbody>
        </table>
    )
}

AccountTable.propTypes = {
    accountdata: PropTypes.any
}