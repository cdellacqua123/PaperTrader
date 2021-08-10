import * as APIPlace from "../util/positions";
import * as APIRemember from "../util/trades";

export const RECEIVE_TRADE = 'RECEIVE_TRADE';

export const placeTrade = (trade) => dispatch => (
    APIPlace.placeTrade(trade)
        .then(trade => dispatch({ type: "RECEIVE_TRADE", trade}))
);

export const rememberTrade = (trade) => dispatch => (
    APIRemember.rememberTrade(trade)
        .then(trade => dispatch({ type: "RECEIVE_TRADE", trade}))
);