const SET_CHATS = 'SET_CHATS';
const APPEND_CHATS = 'APPEND_CHATS';
const SET_CURRENT_FOLDER_CHATS = 'SET_CURRENT_FOLDER_CHATS';

const defaultState = {
    allChats: [],
    currentFolderChats: []
};

const reducer = (state = defaultState, action) => {

    switch (action.type) {
        case SET_CHATS:
            return {...state, allChats: [...action.payload]};

        case APPEND_CHATS:
            return {...state, allChats: [...state.allChats, ...action.payload]};

        case SET_CURRENT_FOLDER_CHATS:
            return {...state, currentFolderChats: [...action.payload]};

        default:
            return state;
    }
}


export const setChats = (payload) => ({type: SET_CHATS, payload});
export const setCurrentFolderChats = (payload) => ({type: SET_CURRENT_FOLDER_CHATS, payload});
export const appendChats = (payload) => ({type: APPEND_CHATS, payload});

export default reducer;