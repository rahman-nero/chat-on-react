import {combineReducers, createStore} from "redux";
import user from "../reducers/user";
import chats from "../reducers/chats";
import folders from "../reducers/folders";

const rootReducers = combineReducers({
    user: user,
    chats: chats,
    folders: folders
});

const store = createStore(rootReducers);

export default store;