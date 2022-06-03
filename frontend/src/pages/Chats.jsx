import React from 'react';
import {useSelector} from "react-redux";
import echoConnect from "../config/echo-server";
import {getToken} from "../utils/common";

const Chats = () => {
    const user = useSelector(state => state.user);

    const echo = echoConnect(getToken());

    echo.private('at')
    .listen('.start', (c) => {
        console.log(c);
    });

    return (
        <div>
            I am from login, {user.login}
        </div>
    );
};

export default Chats;