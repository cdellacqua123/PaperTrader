import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import UsersShow from "./users_show";

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id],
});

const mDTP = dispatch => ({
    logout: user => dispatch(logout(user))
});

export default connect(mSTP, mDTP)(UsersShow);