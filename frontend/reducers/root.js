import { combineReducers } from "redux";
import sessReducer from "./session_reducer";
import sessRedErr from "./session_errors_reducer";

export default combineReducers({
    session: sessReducer,
    errors: sessRedErr 
})