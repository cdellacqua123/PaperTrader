import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { fetchAcctsForUser } from "../../actions/accounts_actions";
import AccountShow from "./account_show";

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    accounts: Object.values(state.entities.acct)
})

const mDTP = dispatch => ({
    logout: user => dispatch(logout(user)),
    fetchAcctsForUser: (userId) => dispatch(fetchAcctsForUser(userId))
})
export default connect(mSTP, mDTP)(AccountShow)