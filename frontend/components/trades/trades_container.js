import { connect } from "react-redux";
import TradesShow from "./trades_show";
import { logout } from "../../actions/session_actions";
import { rememberTrade } from "../../actions/trades_actions";
import { placeTrade } from "../../actions/trades_actions";
import { fetchAcctsForUser } from "../../actions/accounts_actions";


const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    accounts: Object.values(state.entities.acct)
})

const mDTP = dispatch => ({
    logout: user => dispatch(logout(user)),
    rememberTrade: trade => dispatch(rememberTrade(trade)),
    placeTrade: trade => dispatch(placeTrade(trade)),
    fetchAcctsForUser: user => dispatch(fetchAcctsForUser(user))
});

export default connect(mSTP, mDTP)(TradesShow);