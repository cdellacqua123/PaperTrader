import { connect } from "react-redux";
import { createAcct, fetchAcctsForUser } from "../../actions/accounts_actions";
import { fetchUser } from "../../actions/users_actions";
import AccountForm from "./account_form";
import { logout } from "../../actions/session_actions";
import { getQuote } from "../../actions/quote_actions";

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    accounts: Object.values(state.entities.acct),
    quote: state.quote
});

const mDTP = dispatch => ({
    submitAcct: account => dispatch(createAcct(account)),
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchAcctsForUser: (userId) => dispatch(fetchAcctsForUser(userId)),
    logout: user => dispatch(logout(user)),
    getQuote: (ticker) => dispatch(getQuote(ticker))
});

export default connect(mSTP, mDTP)(AccountForm);