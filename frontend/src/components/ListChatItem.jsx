import React from 'react';
import cl from "../styles/Chat.module.css";
import {useDispatch, useSelector} from "react-redux";
import {setChatInfo, setSelectedChatId} from "../redux/reducers/chat";
import { useNavigate } from "react-router-dom";


const ListChatItem = ({id, userImage, online, username, isSelected, lastMessage, countUnread}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const chats = useSelector(state => state.chats.allChats);

    const selectChat = () => {
        const currentChat = chats.filter((elem) => elem.id === +id);

        // Обновляем стейт, указываем какой чат выбрали
        dispatch(setSelectedChatId(id));
        dispatch(setChatInfo(...currentChat));

        navigate(`/chats/${id}`, { replace: true });
    }


    return (
        <div onClick={selectChat} className={[cl.chat, isSelected ? cl.selectedChat : ''].join(' ')} >
            <div className={cl.image}>
                <img src={userImage} alt=""/>
                { online ? <div className={cl.online}></div> : ''}
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

export default ListChatItem;