import React, {useState} from 'react';
import {useSelector} from "react-redux";
import userProfileImg from "../images/userprofile.png"
import folderImg from "../images/test-folder.png"
import cl from "../styles/Chats.module.css"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCake, faAddressBook} from "@fortawesome/free-solid-svg-icons";


import echoConnect from "../config/echo-server";
import {getToken} from "../utils/common";
import Folders from "../components/Folders";

const Chats = () => {
    const user = useSelector(state => state.user);

    const [folders, setFolders] = useState([
        {folder_id: 1, folder_name: "Друзья", folder_icon: <FontAwesomeIcon icon={faCake} /> },
        {folder_id: 2, folder_name: "Работа", folder_icon: <FontAwesomeIcon icon={faAddressBook} /> },
    ]);

    // const echo = echoConnect(getToken());
    //
    // echo.private('at')
    // .listen('.start', (c) => {
    //     console.log(c);
    // });

    const changeFold = (e) => {

        console.log(e.target);
    }

    return (
        <div className={cl.app}>

            <Folders folders={folders} />


            <div className={cl.left}>
                <div className={cl.search__block}>
                    <input  type="text" placeholder="Поиск чата"/>
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