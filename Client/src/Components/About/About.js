import React from 'react';
import placeHolderImg from '../../assets/img/placeholder.png';
import Styles from './About.module.scss';
import { MyComp1, MyComp2 } from '../ReusableDemo/ReusableComp';

export default function About() {
    return (
        <div className={Styles.about_container}>
            <h2>About iJavaScript</h2>

            <hr />

            <div className={Styles.aboutForm}>
                <div>
                    <img src={placeHolderImg} alt="placeholder" className={Styles.placeholderImg} />
                </div>
                <div>
                    <p>
                        iJavaScript is a research group, founded to check different javascript frameworks based on different design patterns.
                    </p>
                    <p>
                        During Kick-off it will test React, Angular, Knockout and EmberJS features. This use case will prove different aspects of framework capabilities.
                    </p>
                </div>
            </div>

            <div className={Styles.reusableSection}>
                <h3>Re-usable Components</h3>
                <MyComp1 />
                <MyComp2 />
            </div>
        </div>
    )
}