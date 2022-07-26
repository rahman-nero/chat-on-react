import React from 'react';
import cl from "../styles/Folders.module.css";
import FoldItem from "./FoldItem";
import {useDispatch, useSelector} from "react-redux";
import {setSelectedFolderId} from "../redux/reducers/folders";
import {setChats, setCurrentFolderChats} from "../redux/reducers/chats";

const Folders = () => {

    const dispatch = useDispatch();
    const folders = useSelector(state => state.folders.folders);
    const allChats = useSelector(state => state.chats.allChats);
    const selectedFoldId = useSelector(state => state.folders.selectedFoldId);

    const changeFolder = (id) => {
        // WORKAROUND
        if (id === selectedFoldId) {
            return;
        }

        dispatch(setSelectedFolderId(id));

        const filteredChats = allChats.filter((elem) => {
            return elem.folder_id === id;
        });

        dispatch(setCurrentFolderChats(filteredChats));
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