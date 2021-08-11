import { connect } from "react-redux";
import TradesShow from "./trades_show";
import { logout } from "../../actions/session_actions";
import { rememberTrade } from "../../actions/trades_actions";
import { placeTrade } from "../../actions/trades_actions";


const mSTP = state => ({
    currentUserId: state.session.id
})

const mDTP = dispatch => ({
    logout: user => dispatch(logout(user)),
    rememberTrade: trade => dispatch(rememberTrade(trade)),
    placeTrade: trade => dispatch(placeTrade(trade))
});

export default connect(mSTP, mDTP)(TradesShow);