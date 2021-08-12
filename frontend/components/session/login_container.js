import { connect } from "react-redux";
import { login, clearSessionErrors } from "../../actions/session_actions";
import LoginForm from "./login_form";


const mSTP = state => ({
    errors: state.errors.sessRedErr
});

const mDTP = dispatch => ({
    login: user => dispatch(login(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(mSTP, mDTP)(LoginForm);