import React from 'react';
import cl from "../styles/Chats.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCake} from "@fortawesome/free-solid-svg-icons";
import {useParams} from "react-router-dom";
import FoldItem from "./FoldItem";

const Folders = ({folders}) => {

    const changedFolderId = useParams();
    console.log(changedFolderId);

    return (
        <div className={cl.folders}>
            <div className={cl.fold}>
                <FontAwesomeIcon icon={faCake}/>
                <div className={cl.fold__caption}>Все чаты</div>
            </div>

            {folders.map((fold) => (<FoldItem folderId={fold.folder_id} folderName={fold.folder_name} folderIcon={fold.folder_icon}/>))}

        </div>
    );
};

export default Folders;