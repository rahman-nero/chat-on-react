import React from 'react';
import cl from "../styles/Chats.module.css";
import {useSelector} from "react-redux";
import ChatItem from "./ChatItem";

const Chats = () => {

    const chats = useSelector(state => state.chats);

    if (chats.length === 0) {
        return (<h2>Чатов нет, но вы держитесь</h2>)
    }

    return (
        <div className={cl.chats}>
            {chats.map((chat) => (
                <ChatItem
                    key={chat.id}
                    username={chat.username}
                    userImage={chat.user_image}
                    lastMessage={chat.last_message}
                    online={chat.online}
                    countUnread={chat.count_unread}
                />
            ))}
        </div>
    );
};

export default Chats;