import { connect } from "react-redux";
import { createAcct } from "../../actions/accounts_actions";
import AccountForm from "./account_form";

const mSTP = state => ({
    account: {
        user_id: state.entities.users[state.session.id].id,
        account_name: '',
        balance: '',
        shorting: 'false'
    },
    formType: 'Create Account'
});

const mDTP = dispatch => ({
    submitAcct: account => dispatch(createAcct(account))
});

export default connect(mSTP, mDTP)(AccountForm);