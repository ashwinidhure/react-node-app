import React from 'react';
import './Modal.scss';
import Backdrop from '../Backdrop/Backdrop';

export default class Modal extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    render() {
        return (
            <React.Fragment>
                <Backdrop show={this.props.show} clicked={this.props.modelClosed}/>
                <div
                    className="Modal"
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}
                >
                    {this.props.children}
                </div>
            </React.Fragment>
        )
    }
}
