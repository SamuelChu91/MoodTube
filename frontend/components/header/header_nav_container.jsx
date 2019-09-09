import { connect } from 'react-redux';
import HeaderNav from './header_nav';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router';
import { searchVideos } from '../../actions/video_actions';


const msp = state => {
    return {
        currentUser: state.session.user,
        logged_in: Boolean(state.session.user),
        users: state.users,
    }
};

const mdp = dispatch => {
    return {
        logout: () => dispatch(logout()),
        search: (title) => dispatch(searchVideos(title))
    }
};

export default withRouter(connect(msp, mdp)(HeaderNav));