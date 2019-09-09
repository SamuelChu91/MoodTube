import { connect } from 'react-redux';
import { signup, clearErrors } from '../../actions/session_actions';
import SignUpForm from './sign_up_form';

// should route to containers because
// they provide the store to the presentational component
// presentational is just the html
// 500 error should check server

const msp = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: "signup",
    }
};

const mdp = (dispatch, ownProps) => {
    return {
        signup: (user) => dispatch(signup(user)),
        clear: () => dispatch(clearErrors())
    }
};

export default connect(msp, mdp)(SignUpForm)