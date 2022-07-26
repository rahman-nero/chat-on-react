import React, {useEffect} from 'react';
import cl from "../styles/SelectedChat.module.css"
import {useDispatch, useSelector} from "react-redux";
import {setMessages} from "../redux/reducers/chat";

const Chat = () => {
    const dispatch = useDispatch();
    const currentChat = useSelector(state => state.chat.chatInfo);
    const messages = useSelector(state => state.chat.messages);

    useEffect(() => {
        dispatch(setMessages([
            {
                id: 1,
                user_id: 1,
                message: "Привет asda sda sd asda sd a",
                created_at: "2022-05-22 19:12",
            },
            {
                id: 2,
                user_id: 3,
                message: "Приветa ogdjs gjso jspodjf osjdf opsjdpof jspodjf osjdfop jsopdjf opsjdfp osjdpofjasd kasodkasd",
                created_at: "2022-05-22 19:12",
            },
            {
                id: 3,
                user_id: 1,
                message: "Привет asda sd  aaaaaaa a a a a a a sd asd as aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                created_at: "2022-05-22 19:12",
            },
            {
                id: 4,
                user_id: 1,
                message: "Привет",
                created_at: "2022-05-22 19:12",
            },
        ]));
    }, [])

    console.log(currentChat);

    function getTime(date) {
        const dateClass = new Date(date);

        return `${dateClass.getHours()}:${dateClass.getMinutes()}`
    }

    return (
        <div style={{color: "white"}}>
            <div className={cl.header}>

                <div className={cl.user_information}>
                    <img src={currentChat.user_image} alt=""/>

                    <div className={cl.userInfo}>
                        <p className={cl.username}>{currentChat.username}</p>
                        <p className={cl.last_online}> {currentChat.online && 'Онлайн' || currentChat.last_online}</p>
                    </div>

                </div>

            </div>

            <div className={cl.messages}>
                {messages.map(elem => {
                    return <div className={[cl.message, elem.user_id === 1 ? cl.right : cl.left].join(' ')}>

                        <div className={cl.message_username}>{elem.user_id}</div>
                        <div className={cl.message_content}>{elem.message}</div>
                        <div className={cl.message_date}>{getTime(elem.created_at)}</div>

                    </div>
                })}
            </div>

            <div className={cl.send_form}>

            </div>
        </div>
    );
};

export default Chat;