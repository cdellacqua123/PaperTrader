import { combineReducers } from "redux";
import sessReducer from "./session_reducer";
import errors_reducer from "./errors_reducer";
import entities from "./entities_reducer";

const RootReducer = combineReducers({
    session: sessReducer,
    errors: errors_reducer,
    entities: entities
})

export default RootReducer;