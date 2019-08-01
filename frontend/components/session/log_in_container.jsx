import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LogInForm from './log_in_form';

const msp = (state, ownProps) => {
    return {
        // errors: state.errors.session,
        formType: "login",
    }
};

const mdp = (dispatch, ownProps) => {
    return {
        login: (user) => dispatch(login(user)),
    }
};

export default connect(msp, mdp)(LogInForm)