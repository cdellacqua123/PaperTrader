import { connect } from "react-redux";
import TradesShow from "./trades_show";
import { logout } from "../../actions/session_actions";

const mDTP = dispatch => ({
    logout: user => dispatch(logout(user))
});

export default connect(null, mDTP)(TradesShow);