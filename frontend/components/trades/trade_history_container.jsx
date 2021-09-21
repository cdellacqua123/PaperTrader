import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { fetchAcctsForUser } from "../../actions/accounts_actions";
import { findAllTrades } from "../../actions/trades_actions";
import TradeHistory from "./trade_history";
import { getQuote } from "../../actions/quote_actions";

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    accounts: Object.values(state.entities.acct),
    trades: Object.values(state.trades),
    quote: state.quote
})

const mDTP = dispatch => ({
    logout: user => dispatch(logout(user)),
    fetchAcctsForUser: (userId) => dispatch(fetchAcctsForUser(userId)),
    findAllTrades: (acctId) => dispatch(findAllTrades(acctId)),
    getQuote: (ticker) => dispatch(getQuote(ticker))
})
export default connect(mSTP, mDTP)(TradeHistory)