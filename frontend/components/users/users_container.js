import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import UsersForm from "./users_form";

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    logout: user => dispatch(logout(user))
});

export default connect(mSTP, mDTP)(UsersForm);