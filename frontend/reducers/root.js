import { combineReducers } from "redux";
import sessReducer from "./session_reducer";
import sessRedErr from "./session_errors_reducer";
import entities from "./entities_reducer";

const RootReducer = combineReducers({
    session: sessReducer,
    errors: sessRedErr,
    entities: entities
})

export default RootReducer;