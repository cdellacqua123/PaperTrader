import { RECEIVE_TRADE, FIND_TRADES } from "../actions/trades_actions";

const tradesReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    switch(action.type) {
        case (RECEIVE_TRADE):
            return Object.assign({}, oldState, action.trades);
        case (FIND_TRADES):
            let tradesState = []
            if (Object.values(oldState).length > 0) {
                tradesState.push(Object.values(oldState).flat())
            }
            tradesState.push(Object.values(action.trades))
            return tradesState
        default:
            return oldState;
    }
};

export default tradesReducer;