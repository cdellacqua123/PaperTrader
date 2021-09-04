import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { fetchAcctsForUser } from "../../actions/accounts_actions";
import { findAllTrades } from "../../actions/trades_actions";
import TradeHistory from "./trade_history";

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    accounts: Object.values(state.entities.acct),
    trades: Object.values(state.trades)
})

const mDTP = dispatch => ({
    logout: user => dispatch(logout(user)),
    fetchAcctsForUser: (userId) => dispatch(fetchAcctsForUser(userId)),
    findAllTrades: (acctId) => dispatch(findAllTrades(acctId))
})
export default connect(mSTP, mDTP)(TradeHistory)