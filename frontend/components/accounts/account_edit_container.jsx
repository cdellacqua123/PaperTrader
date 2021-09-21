import { connect } from "react-redux";
import AccountEdit from "./account_edit";
import { logout } from "../../actions/session_actions";
import { fetchAcctsForUser, editAcct, deleteAcct } from "../../actions/accounts_actions";
import { getQuote } from "../../actions/quote_actions";

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    accounts: Object.values(state.entities.acct),
    quote: state.quote
})

const mDTP = dispatch => ({
    logout: user => dispatch(logout(user)),
    fetchAcctsForUser: (userId) => dispatch(fetchAcctsForUser(userId)),
    editAcct: (acct) => dispatch(editAcct(acct)),
    deleteAcct: (acctId) => dispatch(deleteAcct(acctId)),
    getQuote: (ticker) => dispatch(getQuote(ticker))
})

export default connect(mSTP, mDTP)(AccountEdit)