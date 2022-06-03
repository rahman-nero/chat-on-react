import React from 'react';
import {useSelector} from "react-redux";
import cl from "../styles/Chats.module.css"

const Chats = () => {
    const user = useSelector(state => state.user);

    // const echo = echoConnect(getToken());

    // echo.private('at')
    // .listen('.start', (c) => {
    //     console.log(c);
    // });

    return (
        <div className={}>

            I am from login, {user.login}
        </div>
    );
};

export default Chats;