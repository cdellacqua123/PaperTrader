import { combineReducers } from "redux";
import users_reducer from'./users_reducer';
import acctReducer from "./accounts_reducer";

export default combineReducers({
    users: users_reducer,
    acct: acctReducer
});