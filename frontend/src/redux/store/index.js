import {applyMiddleware, combineReducers, createStore} from "redux";
import user from "../reducers/user";
import chats from "../reducers/chats";
import folders from "../reducers/folders";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducers = combineReducers({
    user: user,
    chats: chats,
    folders: folders
});


const store = createStore(rootReducers, composeWithDevTools());

export default store;