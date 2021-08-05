import { RECEIVE_ACCT, REMOVE_ACCT } from "../actions/accounts_actions";

const acctReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    switch(action.type) {
        case(RECEIVE_ACCT):
            return Object.assign({}, oldState, {[action.acct.id]: action.acct})
        case(REMOVE_ACCT):
            let nextState = Object.assign({}, oldState);
            delete nextState[action.acctId]
            return nextState
        default:
            return oldState;
    }
};

export default acctReducer