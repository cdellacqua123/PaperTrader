import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import LoginForm from "./login_form";

const mDTP = dispatch => ({
    signup: user => dispatch(login(user))
});

export default connect(null, mDTP)(LoginForm);