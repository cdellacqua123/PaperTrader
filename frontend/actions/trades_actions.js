import * as APIPositionUtil from "../util/positions";
import * as APITradeUtil from "../util/trades";

export const RECEIVE_TRADE = 'RECEIVE_TRADE';
export const FIND_TRADES = 'FIND_TRADES';

export const placeTrade = (trade) => dispatch => (
    APIPositionUtil.placeTrade(trade)
        .then(trade => dispatch({ type: "RECEIVE_TRADE", trade}))
);

export const rememberTrade = (trade) => dispatch => (
    APITradeUtil.rememberTrade(trade)
        .then(trade => dispatch({ type: "RECEIVE_TRADE", trade}))
);

export const findAllTrades = (acctId) => dispatch => (
    APITradeUtil.findAllTrades(acctId)
        .then(trades => dispatch({ type: 'FIND_TRADES', trades}))
);