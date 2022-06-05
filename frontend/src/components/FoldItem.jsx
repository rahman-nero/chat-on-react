import React from 'react';
import cl from "../styles/Chats.module.css";

const FoldItem = ({folderId, folderName, folderIcon}) => {
    return (
        <div className={cl.fold} key={folderId}>
            {folderIcon}
            <div className={cl.fold__caption}>{folderName}</div>
        </div>
    );
};

export default FoldItem;