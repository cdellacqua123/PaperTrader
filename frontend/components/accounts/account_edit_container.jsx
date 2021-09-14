import { connect } from "react-redux";
import AccountEdit from "./account_edit";
import { logout } from "../../actions/session_actions";
import { fetchAcctsForUser, editAcct, deleteAcct } from "../../actions/accounts_actions";

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    accounts: Object.values(state.entities.acct)
})

const mDTP = dispatch => ({
    logout: user => dispatch(logout(user)),
    fetchAcctsForUser: (userId) => dispatch(fetchAcctsForUser(userId)),
    editAcct: (acct) => dispatch(editAcct(acct)),
    deleteAcct: (acctId) => dispatch(deleteAcct(acctId))
})

export default connect(mSTP, mDTP)(AccountEdit)