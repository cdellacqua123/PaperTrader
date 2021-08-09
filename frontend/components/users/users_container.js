import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import UsersShow from "./users_show";
import { fetchAcctsForUser } from "../../actions/accounts_actions";

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    accounts: Object.values(state.entities.acct)
})

const mDTP = dispatch => ({
    logout: user => dispatch(logout(user)),
    fetchAcctsForUser: (userId) => dispatch(fetchAcctsForUser(userId))
});

export default connect(mSTP, mDTP)(UsersShow);