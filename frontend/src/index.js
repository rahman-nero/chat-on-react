import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createStore} from "redux";
import {Provider} from "react-redux";


const defaultState = {};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_USER":
            return action.payload;

        default:
            return state;
    }
}

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

