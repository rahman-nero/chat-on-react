import React from 'react';
import {useSelector} from "react-redux";
import Echo from "laravel-echo";

const Chats = () => {
    const user = useSelector(state => state);

    window.io = require('socket.io-client');
    const echo = new Echo({
        broadcaster: 'socket.io',
        host: 'http://localhost:6001',
        auth: {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        }
    });

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