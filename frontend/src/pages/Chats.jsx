import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import userProfileImg from "../images/userprofile.png"
import cl from "../styles/Chats.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCake, faAddressBook} from "@fortawesome/free-solid-svg-icons";
import Folders from "../components/Folders";
import {clearFolds, setFolds} from "../redux/reducers/folders";

const Chats = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setFolds([
            {folder_id: 1, folder_name: "Все чаты", folder_icon: <FontAwesomeIcon icon={faCake}/>},
            {folder_id: 2, folder_name: "Друзья", folder_icon: <FontAwesomeIcon icon={faCake}/>},
            {folder_id: 3, folder_name: "Работа", folder_icon: <FontAwesomeIcon icon={faAddressBook}/>},
        ]));

        return () => {
            dispatch(clearFolds());
        }
    }, []);

    const changeFold = (e) => {
        console.log(e.target)
    }

    return (
        <div className={cl.app}>

            <Folders/>

            <div className={cl.left}>
                <div className={cl.search__block}>
                    <input type="text" placeholder="Поиск чата"/>
                    <br/>
                    <button className={cl.create_chat_button}>Начать новый чат</button>
                </div>

                <div className={cl.chats}>
                    <div className={cl.chat}>
                        <div className="image">
                            <img src={userProfileImg} alt=""/>
                        </div>

                        <div className={cl.chat__info}>
                            <h4 className={cl.chat_author}>Timur murachev</h4>
                            <p className={cl.last_message}>.........фыв</p>
                        </div>

                    </div>

                    <div className={cl.chat}>
                        aaa
                    </div>

                </div>
            </div>

            <div className={cl.chat_container}>
                asd
            </div>
        </div>
    );
};

export default Chats;