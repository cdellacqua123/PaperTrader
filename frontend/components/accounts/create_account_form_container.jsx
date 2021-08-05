import { connect } from "react-redux";
import { createAcct } from "../../actions/accounts_actions";
import AccountForm from "./account_form";

const mSTP = state => ({
    account: {
        account_name: '',
        balance: '',
        shorting: 'false'
    },
    formType: 'Create Account'
});

const mDTP = dispatch => ({
    submitAcct: acct => dispatch(createAcct(acct))
});

export default connect(mSTP, mDTP)(AccountForm);