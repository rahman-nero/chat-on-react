import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import cl from "../styles/Chats.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCake, faAddressBook} from "@fortawesome/free-solid-svg-icons";
import Folders from "../components/Folders";
import ChatComponent from "../components/Chats"
import {appendFolds, clearFolds} from "../redux/reducers/folders";
import {setChats} from "../redux/reducers/chats";

const Chats = () => {

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(appendFolds([
            {folder_id: 1, folder_name: "Люди", folder_icon: <FontAwesomeIcon icon={faCake}/>},
            {folder_id: 2, folder_name: "Друзья", folder_icon: <FontAwesomeIcon icon={faCake}/>},
            {folder_id: 3, folder_name: "Работа", folder_icon: <FontAwesomeIcon icon={faAddressBook}/>},
        ]));

        dispatch(setChats([
            {id: 1, folder_id: 1, username: 'Бензопила в действий', user_image: "https://www.osmpic.com/wp-content/uploads/2019/03/PicsArt_03-21-10.30.59-901x1024.jpg", online: true,  last_message: 'Последнее сообщениеasdasda sdasdasdaэто мм', count_unread: 10},
            {id: 2,  folder_id: 2, username: 'Человек муравей', user_image: "https://cdn.dribbble.com/users/5534/screenshots/14230133/media/e2f853f8232acad78bf143c32f2f3a04.jpg", online: true,  last_message: 'Последнее сообщение это мм',  count_unread: 0},
            {id: 3,  folder_id: 3,username: 'Человек муравей', user_image: "https://cdn.dribbble.com/users/5534/screenshots/14230133/media/e2f853f8232acad78bf143c32f2f3a04.jpg", online: true,  last_message: 'Последнее сообщение это мм',  count_unread: 0},
            {id: 4,  folder_id: 2,username: 'Человек муравей', user_image: "https://cdn.dribbble.com/users/5534/screenshots/14230133/media/e2f853f8232acad78bf143c32f2f3a04.jpg", online: true,  last_message: 'Последнее сообщение это мм',  count_unread: 0},
            {id: 5, folder_id: 3, username: 'Человек муравей', user_image: "https://cdn.dribbble.com/users/5534/screenshots/14230133/media/e2f853f8232acad78bf143c32f2f3a04.jpg", online: true,  last_message: 'Последнее сообщение это мм',  count_unread: 0},
            {id: 6,  folder_id: 2, username: 'Человек муравей', user_image: "https://cdn.dribbble.com/users/5534/screenshots/14230133/media/e2f853f8232acad78bf143c32f2f3a04.jpg", online: true,  last_message: 'Последнее сообщение это мм',  count_unread: 0},
            {id: 7,  folder_id: 1, username: 'Человек муравей', user_image: "https://cdn.dribbble.com/users/5534/screenshots/14230133/media/e2f853f8232acad78bf143c32f2f3a04.jpg", online: true,  last_message: 'Последнее сообщение это мм',  count_unread: 0},
            {id: 8,  folder_id: 3, username: 'Человек муравей', user_image: "https://cdn.dribbble.com/users/5534/screenshots/14230133/media/e2f853f8232acad78bf143c32f2f3a04.jpg", online: true,  last_message: 'Последнее сообщение это мм',  count_unread: 0},
            {id: 9,  folder_id: 2, username: 'Человек муравей', user_image: "https://cdn.dribbble.com/users/5534/screenshots/14230133/media/e2f853f8232acad78bf143c32f2f3a04.jpg", online: true,  last_message: 'Последнее сообщение это мм',  count_unread: 0},
            {id: 10,  folder_id: 3, username: 'Человек муравей', user_image: "https://cdn.dribbble.com/users/5534/screenshots/14230133/media/e2f853f8232acad78bf143c32f2f3a04.jpg", online: true,  last_message: 'Последнее сообщение это мм',  count_unread: 0},
            {id: 11,  folder_id: 3, username: 'Человек муравей', user_image: "https://cdn.dribbble.com/users/5534/screenshots/14230133/media/e2f853f8232acad78bf143c32f2f3a04.jpg", online: true,  last_message: 'Последнее сообщение это мм',  count_unread: 0},
            {id: 12,  folder_id: 3, username: 'Человек муравей', user_image: "https://cdn.dribbble.com/users/5534/screenshots/14230133/media/e2f853f8232acad78bf143c32f2f3a04.jpg", online: true,  last_message: 'Последнее сообщение это мм',  count_unread: 0},
            {id: 13,  folder_id: 2, username: 'Человек муравей', user_image: "https://cdn.dribbble.com/users/5534/screenshots/14230133/media/e2f853f8232acad78bf143c32f2f3a04.jpg", online: true,  last_message: 'Последнее сообщение это мм',  count_unread: 0},
            {id: 14,  folder_id: 2, username: 'Человек муравей', user_image: "https://cdn.dribbble.com/users/5534/screenshots/14230133/media/e2f853f8232acad78bf143c32f2f3a04.jpg", online: true,  last_message: 'Последнее сообщение это мм',  count_unread: 0},
            {id: 15,  folder_id: 2, username: 'Человек муравей', user_image: "https://cdn.dribbble.com/users/5534/screenshots/14230133/media/e2f853f8232acad78bf143c32f2f3a04.jpg", online: true,  last_message: 'Последнее сообщение это мм',  count_unread: 0},
            {id: 16,  folder_id: 3, username: 'Человек муравей', user_image: "https://cdn.dribbble.com/users/5534/screenshots/14230133/media/e2f853f8232acad78bf143c32f2f3a04.jpg", online: true,  last_message: 'Последнее сообщение это мм',  count_unread: 0},
            {id: 17,  folder_id: 1, username: 'Человек муравей', user_image: "https://cdn.dribbble.com/users/5534/screenshots/14230133/media/e2f853f8232acad78bf143c32f2f3a04.jpg", online: true,  last_message: 'Последнее сообщение это мм',  count_unread: 0},
            {id: 18,  folder_id: 1, username: 'Человек муравей', user_image: "https://cdn.dribbble.com/users/5534/screenshots/14230133/media/e2f853f8232acad78bf143c32f2f3a04.jpg", online: true,  last_message: 'Последнее сообщение это мм',  count_unread: 0},
            {id: 19,  folder_id: 1, username: 'Человек муравей', user_image: "https://cdn.dribbble.com/users/5534/screenshots/14230133/media/e2f853f8232acad78bf143c32f2f3a04.jpg", online: true,  last_message: 'Последнее сообщение это мм',  count_unread: 0},
            {id: 20,  folder_id: 1, username: 'Человек муравей', user_image: "https://cdn.dribbble.com/users/5534/screenshots/14230133/media/e2f853f8232acad78bf143c32f2f3a04.jpg", online: true,  last_message: 'Последнее сообщение это мм',  count_unread: 0}
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