import * as APIUtil from '../util/session'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS"

const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const signup = user => dispatch => (
    APIUtil.signup(user).then(currentUser => (
        dispatch({ type: 'RECEIVE_CURRENT_USER', currentUser})
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);

export const login = user => dispatch => (
    APIUtil.login(user).then(currentUser => (
        dispatch({ type: 'RECEIVE_CURRENT_USER', currentUser})
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);

export const logout = () => dispatch => (
    APIUtil.logout()
        .then(() => dispatch({ type: 'LOGOUT_CURRENT_USER' })
    , err => (
        console.log(err.responseJSON)
    ))
);

export const clearSessionErrors = () => (
    { type: CLEAR_SESSION_ERRORS}
);