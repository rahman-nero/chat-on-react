import React from 'react';
import cl from "../styles/Chat.module.css";
import {useDispatch} from "react-redux";
import {setSelectedChatId} from "../redux/reducers/chat";
import { useNavigate } from "react-router-dom";


const ChatItem = ({id, userImage, online, username, lastMessage, countUnread}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const selectChat = (chatId) => {
        dispatch(setSelectedChatId(chatId));
        navigate(`/chats/${chatId}`, { replace: true });
    }

    return (
        <div onClick={() => selectChat(id)} className={[cl.chat, online ? "online" : ''].join(' ')}>
            <div className={cl.image}>
                <img src={userImage} alt=""/>
            </div>

            <div className={cl.chat__info}>
                <h4 className={cl.chat_username}>{username}</h4>
                <div className={cl.last_message}>
                    <div className={cl.message}>{lastMessage.length > 30 ? lastMessage.substring(0,  30) + '...' : lastMessage}</div>
                    {countUnread > 0 && <div className={cl.count_unread}>{countUnread}</div>}
                </div>
            </div>

        </div>
    );

};

export default ChatItem;