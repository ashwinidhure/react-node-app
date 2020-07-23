import React from 'react';
import Styles from './ReusableComp.module.scss';

var MyHOC = ComposedComponent => class extends React.Component {
    componentDidMount() {
        this.setState({
            data: 'Click to change color !',
            isRedcolor: false
        });
    }

    toggleColor = () => {
        this.setState((prevState) => {
            return {
                isRedcolor: !prevState.isRedcolor
            }
        })
    }

    render() {
        return <ComposedComponent {...this.props} {...this.state} toggleColor={this.toggleColor} />;
    }
};

class MyComponent extends React.Component {
    render() {
        return (
            <div className={Styles.card + ' ' + (this.props.isRedcolor ? Styles.red : Styles.yellow)}
                onClick={this.props.toggleColor}>
                <h4>{this.props.data}</h4>
            </div>
        )
    }
}

export const MyComp1 = MyHOC(MyComponent);
export const MyComp2 = MyHOC(MyComponent);