import React from 'react';
import {useParams} from "react-router-dom";

const Chat = () => {

    const {chatId} = useParams();

    console.log(chatId);


    return (
        <div>
asd
        </div>
    );
};

export default Chat;