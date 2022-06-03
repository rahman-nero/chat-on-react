import {combineReducers, createStore} from "redux";
import user from "../reducers/user";
import chats from "../reducers/chats";

const rootReducers = combineReducers({
    user: user,
    chats: chats
});

const store = createStore(rootReducers);

export default store;