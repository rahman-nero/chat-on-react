import React from 'react';
import cl from "../styles/Chats.module.css";
import {useParams} from "react-router-dom";
import FoldItem from "./FoldItem";
import {useDispatch, useSelector} from "react-redux";
import {setSelectedFolderId} from "../redux/reducers/folders";

const Folders = () => {

    const dispatch = useDispatch();
    const folders = useSelector(state => state.folders.folders);
    const selectedFoldId = useSelector(state => state.folders.selectedFoldId);

    const changeFolder = (id) => {
        // WORKAROUND
        if (id === selectedFoldId) {
            return;
        }

        dispatch(setSelectedFolderId(id));
        console.log(id);
    };

    return (
        <div className={cl.folders}>
            {folders.map((fold) => (
                <FoldItem
                    key={fold.folder_id}
                    changeFolder={changeFolder}
                    selectedFoldId={selectedFoldId}
                    folderId={fold.folder_id}
                    folderName={fold.folder_name}
                    folderIcon={fold.folder_icon}
                />
            ))}
        </div>
    );
};

export default Folders;