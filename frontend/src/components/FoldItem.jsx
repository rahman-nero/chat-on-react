import React from 'react';
import cl from "../styles/Chats.module.css";

const FoldItem = ({changeFolder, selectedFoldId, folderId, folderName, folderIcon}) => {

    const classes = [cl.fold];

    if (selectedFoldId === folderId) {
        classes.push(cl.active);
    }

    return (
        <div className={classes.join(' ')} key={folderId} onClick={() => changeFolder(folderId)} >
            {folderIcon}
            <div className={cl.fold__caption}>{folderName}</div>
        </div>
    );
};

export default FoldItem;