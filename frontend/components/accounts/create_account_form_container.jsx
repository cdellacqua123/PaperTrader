import { connect } from "react-redux";
import { createAcct, fetchAcctsForUser } from "../../actions/accounts_actions";
import { fetchUser } from "../../actions/users_actions";
import AccountForm from "./account_form";
import { logout } from "../../actions/session_actions";

const mSTP = state => ({
    // account: {
    //     user_id: state.entities.users[state.session.id].id,
    //     account_name: '',
    //     balance: '',
    //     shorting_allowed: 'false'
    // },
    currentUser: state.entities.users[state.session.id],
    accounts: Object.values(state.entities.acct)
});

const mDTP = dispatch => ({
    submitAcct: account => dispatch(createAcct(account)),
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchAcctsForUser: (userId) => dispatch(fetchAcctsForUser(userId)),
    logout: user => dispatch(logout(user))
});

export default connect(mSTP, mDTP)(AccountForm);