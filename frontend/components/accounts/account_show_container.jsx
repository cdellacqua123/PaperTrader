import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { fetchAcctsForUser } from "../../actions/accounts_actions";
import { findPositions } from "../../actions/position_actions";
import AccountShow from "./account_show";
import { getQuote } from "../../actions/quote_actions";

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    accounts: Object.values(state.entities.acct),
    positions: Object.values(state.positions),
    quote: state.quote
})

const mDTP = dispatch => ({
    logout: user => dispatch(logout(user)),
    fetchAcctsForUser: (userId) => dispatch(fetchAcctsForUser(userId)),
    findPositions: (acctId) => dispatch(findPositions(acctId)),
    getQuote: (ticker) => dispatch(getQuote(ticker))
})
export default connect(mSTP, mDTP)(AccountShow)