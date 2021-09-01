import { combineReducers } from "redux";
import sessReducer from "./session_reducer";
import errors_reducer from "./errors_reducer";
import entities from "./entities_reducer";
import tradesReducer from "./trades_reducer";
import posReducer from "./positions_reducer";

const RootReducer = combineReducers({
    session: sessReducer,
    errors: errors_reducer,
    entities: entities,
    trades: tradesReducer,
    positions: posReducer
})

export default RootReducer;