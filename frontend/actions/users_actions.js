import * as APIUtil from "../util/users_util";

export const RECEIVE_USER_ID = 'RECEIVE_USER_ID'

export const fetchUser = userId => dispatch => (
    APIUtil.fetchUser(userId).then(currentUser => (
        dispatch({ type: 'RECEIVE_USER_ID', currentUser})
    ))
);
