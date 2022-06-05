import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import cl from "../styles/Chats.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCake, faAddressBook} from "@fortawesome/free-solid-svg-icons";
import Folders from "../components/Folders";
import ChatComponent from "../components/Chats"
import {clearFolds, setFolds} from "../redux/reducers/folders";
import {setChats} from "../redux/reducers/chats";

const Chats = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setFolds([
            {folder_id: 1, folder_name: "Все чаты", folder_icon: <FontAwesomeIcon icon={faCake}/>},
            {folder_id: 2, folder_name: "Друзья", folder_icon: <FontAwesomeIcon icon={faCake}/>},
            {folder_id: 3, folder_name: "Работа", folder_icon: <FontAwesomeIcon icon={faAddressBook}/>},
        ]));

        dispatch(setChats([
            {id: 1, username: 'Бензопила в действий', user_image: "https://www.osmpic.com/wp-content/uploads/2019/03/PicsArt_03-21-10.30.59-901x1024.jpg", online: true,  last_message: 'Последнее сообщениеasdasda sdasdasdaэто мм', count_unread: 10},
            {id: 2, username: 'Человек муравей', user_image: "https://cdn.dribbble.com/users/5534/screenshots/14230133/media/e2f853f8232acad78bf143c32f2f3a04.jpg", online: true,  last_message: 'Последнее сообщение это мм',  count_unread: 0},
            {id: 3, username: 'Человек муравей', user_image: "https://cdn.dribbble.com/users/5534/screenshots/14230133/media/e2f853f8232acad78bf143c32f2f3a04.jpg", online: true,  last_message: 'Последнее сообщение это мм',  count_unread: 0},
            {id: 4, username: 'Человек муравей', user_image: "https://cdn.dribbble.com/users/5534/screenshots/14230133/media/e2f853f8232acad78bf143c32f2f3a04.jpg", online: true,  last_message: 'Последнее сообщение это мм',  count_unread: 0},
            {id: 5, username: 'Человек муравей', user_image: "https://cdn.dribbble.com/users/5534/screenshots/14230133/media/e2f853f8232acad78bf143c32f2f3a04.jpg", online: true,  last_message: 'Последнее сообщение это мм',  count_unread: 0},
            {id: 6, username: 'Человек муравей', user_image: "https://cdn.dribbble.com/users/5534/screenshots/14230133/media/e2f853f8232acad78bf143c32f2f3a04.jpg", online: true,  last_message: 'Последнее сообщение это мм',  count_unread: 0},
            {id: 7, username: 'Человек муравей', user_image: "https://cdn.dribbble.com/users/5534/screenshots/14230133/media/e2f853f8232acad78bf143c32f2f3a04.jpg", online: true,  last_message: 'Последнее сообщение это мм',  count_unread: 0},
            {id: 8, username: 'Человек муравей', user_image: "https://cdn.dribbble.com/users/5534/screenshots/14230133/media/e2f853f8232acad78bf143c32f2f3a04.jpg", online: true,  last_message: 'Последнее сообщение это мм',  count_unread: 0},
            {id: 9, username: 'Человек муравей', user_image: "https://cdn.dribbble.com/users/5534/screenshots/14230133/media/e2f853f8232acad78bf143c32f2f3a04.jpg", online: true,  last_message: 'Последнее сообщение это мм',  count_unread: 0},
            {id: 10, username: 'Человек муравей', user_image: "https://cdn.dribbble.com/users/5534/screenshots/14230133/media/e2f853f8232acad78bf143c32f2f3a04.jpg", online: true,  last_message: 'Последнее сообщение это мм',  count_unread: 0},
            {id: 11, username: 'Человек муравей', user_image: "https://cdn.dribbble.com/users/5534/screenshots/14230133/media/e2f853f8232acad78bf143c32f2f3a04.jpg", online: true,  last_message: 'Последнее сообщение это мм',  count_unread: 0},
            {id: 12, username: 'Человек муравей', user_image: "https://cdn.dribbble.com/users/5534/screenshots/14230133/media/e2f853f8232acad78bf143c32f2f3a04.jpg", online: true,  last_message: 'Последнее сообщение это мм',  count_unread: 0},
            {id: 13, username: 'Человек муравей', user_image: "https://cdn.dribbble.com/users/5534/screenshots/14230133/media/e2f853f8232acad78bf143c32f2f3a04.jpg", online: true,  last_message: 'Последнее сообщение это мм',  count_unread: 0},
            {id: 14, username: 'Человек муравей', user_image: "https://cdn.dribbble.com/users/5534/screenshots/14230133/media/e2f853f8232acad78bf143c32f2f3a04.jpg", online: true,  last_message: 'Последнее сообщение это мм',  count_unread: 0},
            {id: 15, username: 'Человек муравей', user_image: "https://cdn.dribbble.com/users/5534/screenshots/14230133/media/e2f853f8232acad78bf143c32f2f3a04.jpg", online: true,  last_message: 'Последнее сообщение это мм',  count_unread: 0},
            {id: 16, username: 'Человек муравей', user_image: "https://cdn.dribbble.com/users/5534/screenshots/14230133/media/e2f853f8232acad78bf143c32f2f3a04.jpg", online: true,  last_message: 'Последнее сообщение это мм',  count_unread: 0},
            {id: 17, username: 'Человек муравей', user_image: "https://cdn.dribbble.com/users/5534/screenshots/14230133/media/e2f853f8232acad78bf143c32f2f3a04.jpg", online: true,  last_message: 'Последнее сообщение это мм',  count_unread: 0},
            {id: 18, username: 'Человек муравей', user_image: "https://cdn.dribbble.com/users/5534/screenshots/14230133/media/e2f853f8232acad78bf143c32f2f3a04.jpg", online: true,  last_message: 'Последнее сообщение это мм',  count_unread: 0},
            {id: 19, username: 'Человек муравей', user_image: "https://cdn.dribbble.com/users/5534/screenshots/14230133/media/e2f853f8232acad78bf143c32f2f3a04.jpg", online: true,  last_message: 'Последнее сообщение это мм',  count_unread: 0},
            {id: 20, username: 'Человек муравей', user_image: "https://cdn.dribbble.com/users/5534/screenshots/14230133/media/e2f853f8232acad78bf143c32f2f3a04.jpg", online: true,  last_message: 'Последнее сообщение это мм',  count_unread: 0}
        ]))

        return () => {
            dispatch(clearFolds());
        }
    }, []);

    return (
        <div className={cl.app}>
            {/* Показ папок */}
            <Folders/>

            <div className={cl.left}>
                <div className={cl.search__block}>
                    <input type="text" placeholder="Поиск чата"/>
                    <br/>
                    <button className={cl.create_chat_button}>Начать новый чат</button>
                </div>

                <ChatComponent />
            </div>

            <div className={cl.chat_container}>
                asd
            </div>
        </div>
    );
};

export default Chats;