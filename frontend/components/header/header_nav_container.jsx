import { connect } from 'react-redux';
import HeaderNav from './header_nav';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router';

const msp = state => {
    debugger
    return {
        currentUser: state.session.user,
        users: state.users
    }
};

const mdp = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
};

export default withRouter(connect(msp, mdp)(HeaderNav));