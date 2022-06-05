import React from 'react';
import cl from "../styles/Folders.module.css";

const FoldItem = ({changeFolder, selectedFoldId, folderId, folderName, folderIcon}) => {

    const classes = [cl.fold];

    // Если папка активная
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