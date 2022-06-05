import React from 'react';
import {useSelector} from "react-redux";
import userProfileImg from "../images/userprofile.png"
import folderImg from "../images/test-folder.png"
import cl from "../styles/Chats.module.css"
import echoConnect from "../config/echo-server";
import {getToken} from "../utils/common";

const Chats = () => {
    const user = useSelector(state => state.user);

    // const echo = echoConnect(getToken());
    //
    // echo.private('at')
    // .listen('.start', (c) => {
    //     console.log(c);
    // });

    return (
        <div className={cl.app}>

            <div className={cl.folders}>
                <div className={cl.fold}>
                    <img src={folderImg} alt=""/>
                    <div className={cl.fold__caption}>Друзья</div>
                </div>

                <div className={cl.fold}>
                    <img src={folderImg} alt=""/>
                    <div className={cl.fold__caption}>Работа</div>
                </div>
            </div>


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