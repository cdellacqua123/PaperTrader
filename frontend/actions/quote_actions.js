import * as APIUtil from '../util/footer'

export const GET_QUOTE = 'GET_QUOTE'

export const getQuote = (ticker) => dispatch => (
    APIUtil.getQuote(ticker).then(quote => dispatch({type: 'GET_QUOTE', quote}))
);