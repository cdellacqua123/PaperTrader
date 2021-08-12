import { connect } from "react-redux";
import { signup, clearSessionErrors } from "../../actions/session_actions";
import SignupForm from "./signup_form";

const mSTP = state => ({
    errors: state.errors.sessRedErr
});

const mDTP = dispatch => ({
    signup: user => dispatch(signup(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(mSTP, mDTP)(SignupForm);