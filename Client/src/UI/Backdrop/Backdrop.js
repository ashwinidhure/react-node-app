import React from 'react';
import './Backdrop.scss';

export default function Backdrop(props) {
    return (
    props.show ? <div onClick={props.clicked} className="Backdrop"></div> : null
    )
}
