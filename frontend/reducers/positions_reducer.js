import { RECEIVE_POS } from "../actions/position_actions";

const posReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    switch(action.type) {
        case (RECEIVE_POS):
            return Object.assign({}, oldState, action.positions);
        default:
            return oldState;
    }
}

export default posReducer