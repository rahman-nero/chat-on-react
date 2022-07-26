import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setChatInfo} from "../redux/reducers/chat";

const Chat = () => {

    const {id} = useParams();
    const dispatch = useDispatch();
    const chats = useSelector(state => state.chats.allChats);

    const boot = (chats, id) => {
        const currentChat = chats.filter((elem) => elem.id === +id);

        dispatch(setChatInfo(...currentChat));
    }

    boot(chats, id);

    const currentChat = useSelector(state => state.chat.chatInfo);

    return (
        <div style={{color:"white"}}>
            { currentChat.id }
        </div>
    );
};

export default Chat;