import React, {useEffect} from 'react';
import cl from "../styles/SelectedChat.module.css"
import {useDispatch, useSelector} from "react-redux";

const Chat = () => {

    const currentChat = useSelector(state => state.chat.chatInfo);

    return (
        <div style={{color:"white"}}>
            <div className={cl.header}>
                { currentChat.id }
            </div>

            <div className={cl.messages}>

            </div>

            <div className={cl.send_form}>

            </div>
        </div>
    );
};

export default Chat;