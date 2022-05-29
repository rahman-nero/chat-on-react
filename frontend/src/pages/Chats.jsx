import React from 'react';
import {useSelector} from "react-redux";

const Chats = () => {
    const user = useSelector(state => state);

    return (
        <div>
            I am from login, {user.login}
        </div>
    );
};

export default Chats;