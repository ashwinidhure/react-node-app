import React from 'react';
import placeHolderImg from '../../assets/img/placeholder.png';
import Styles from './Team.module.scss';
import { connect } from 'react-redux';
import { fetchTeamMembers } from '../../actions/teamActions';
import PropTypes from 'prop-types';

class Team extends React.Component {
    state = {
        isAnimated: false
    }

    animateBox = () => {
        this.setState((prevState) => {
            return {
                isAnimated: !prevState.isAnimated
            }
        })
    }

    componentDidMount() {
        this.props.fetchTeamMembers();
    }

    render() {
        const teamContent = this.props.users.length === 0 ? <h1>Loading...</h1> : (
            <div className={Styles.teamSection}>
                    <div>
                        <ul className={Styles.teamlist}>
                            {
                                this.props.users.map(member => {
                                    return (
                                        <li key={member.id}>
                                            <img src={placeHolderImg} alt="listIcon" className={Styles.listIcon} />
                                            <strong>{member.name}</strong>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div onClick={this.animateBox}>
                        <strong>Click on below Image to animate</strong>
                        <div className={`${Styles.swing} ${this.state.isAnimated ? Styles['animated']: ''}`} >
                            <img src={placeHolderImg} alt="placeholder" className={Styles.placeholderImg} />
                        </div>
                    </div>
                </div>
        )
        return (
            <div className={Styles.team_container}>
                <h2>Meet the Team</h2>

                <hr />

                {teamContent}
            </div>
        )
    }
}

Team.propTypes = {
    users: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    users: state.users.items
})

export default connect(mapStateToProps, { fetchTeamMembers })(Team);
