import { RECEIVE_ACCTS_FOR_USER, RECEIVE_ACCT, REMOVE_ACCT } from "../actions/accounts_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

const acctReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    switch(action.type) {
        case (RECEIVE_ACCTS_FOR_USER):
            return Object.assign({}, oldState, action.accounts)
        case(RECEIVE_ACCT):
            return Object.assign({}, oldState, {[action.acct.id]: action.acct})
        case(LOGOUT_CURRENT_USER):
            return ({});
        case(REMOVE_ACCT):
            let nextState = Object.assign({}, oldState);
            delete nextState[action.acctId]
            return nextState
        default:
            return oldState;
    }
};

export default acctReducer