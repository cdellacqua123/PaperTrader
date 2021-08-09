import { connect } from "react-redux";
import TradesShow from "./trades_show";
import getDailyInfo from "./api_fetch";

const mDTP = dispatch => ({
    getDailyInfo: ticker => dispatch(getDailyInfo(ticker))
});

export default connect(null, null)(TradesShow);