import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER_ID } from "../actions/users_actions";

const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case(RECEIVE_CURRENT_USER):
            return Object.assign({}, oldState, {[action.currentUser.id]: action.currentUser})
        case(RECEIVE_USER_ID):
            return Object.assign({}, oldState, { [action.currentUser.id]: action.currentUser })
        default:
            return oldState;
    }
};

export default usersReducer;