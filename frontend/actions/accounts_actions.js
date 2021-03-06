import * as APIUtil from '../util/accounts'

export const RECEIVE_ACCT = 'RECEIVE_ACCT'
export const REMOVE_ACCT = 'REMOVE_ACCT'
export const RECEIVE_ACCTS_FOR_USER = 'RECEIVE_ACCTS_FOR_USER'

export const createAcct = (acct) => dispatch => (
    APIUtil.createAcct(acct)
        .then(acct => dispatch({ type: 'RECEIVE_ACCT', acct}))
);

export const editAcct = (acct) => dispatch => (
    APIUtil.editAcct(acct)
        .then(acct => dispatch({ type: 'RECEIVE_ACCT', acct }))
);

export const deleteAcct = (acctId) => dispatch => (
    APIUtil.deleteAcct(acctId)
        .then(() => dispatch({ type: 'REMOVE_ACCT', acctId }))
);

export const fetchAcctsForUser = (userId) => dispatch => (
    APIUtil.fetchAcctsForUser(userId)
        .then((accounts) => dispatch({ type: 'RECEIVE_ACCTS_FOR_USER', accounts}))
);