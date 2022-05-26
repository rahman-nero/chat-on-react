import React, {useContext} from 'react';
import {AuthContext} from "../context/AuthContext";
import {$authHost} from "../config";

const Chats = () => {
    const {user} = useContext(AuthContext);

    return (
        <div>
            I am from login, {user.login}
        </div>
    );
};

export default Chats;