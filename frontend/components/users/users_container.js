import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import UsersForm from "./users_form";

const mDTP = dispatch => ({
    logout: user => dispatch(logout(user))
});

export default connect(null, mDTP)(UsersForm);