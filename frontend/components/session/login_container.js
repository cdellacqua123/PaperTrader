import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import LoginForm from "./login_form";

// const mSTP = state => ({
//     user: state.props
// })

const mDTP = dispatch => ({
    login: user => dispatch(login(user))
});

export default connect(null, mDTP)(LoginForm);