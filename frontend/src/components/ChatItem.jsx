import React from 'react';
import cl from "../styles/Chat.module.css";

const ChatItem = ({userImage, online, username, lastMessage, countUnread}) => {

    return (
        <div className={[cl.chat, online ? "online" : ''].join(' ')}>
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