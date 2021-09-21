import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import UsersShow from "./users_show";
import { fetchAcctsForUser } from "../../actions/accounts_actions";
import { fetchNews } from "../../actions/news_actions";
import { getQuote } from "../../actions/quote_actions";

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    accounts: Object.values(state.entities.acct),
    news: Object.values(state.news),
    quote: state.quote
})

const mDTP = dispatch => ({
    logout: user => dispatch(logout(user)),
    fetchAcctsForUser: (userId) => dispatch(fetchAcctsForUser(userId)),
    fetchNews: () => dispatch(fetchNews()),
    getQuote: (ticker) => dispatch(getQuote(ticker))
});

export default connect(mSTP, mDTP)(UsersShow);