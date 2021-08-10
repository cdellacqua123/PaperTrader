import { RECEIVE_TRADE } from "../actions/trades_actions";

const tradesReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    switch(action.type) {
        case (RECEIVE_TRADE):
            return Object.assign({}, oldState, action.trades);
        default:
            return oldState;
    }
};

export default tradesReducer;