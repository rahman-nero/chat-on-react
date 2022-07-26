import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCake} from "@fortawesome/free-solid-svg-icons";

const SET_FOLDS = 'SET_FOLDS';
const APPEND_FOLDS = 'APPEND_FOLDS';
const CLEAR_FOLDS = 'CLEAR_FOLDS';
const SET_SELECTED_FOLD_ID = 'SET_SELECTED_FOLD_ID';


const defaultState = {
    selectedFoldId: null,
    folders: [
        {folder_id: null, folder_name: "Все чаты", folder_icon: <FontAwesomeIcon icon={faCake}/>}
    ]
}

const reducer = (state = defaultState, action) => {

    switch (action.type) {
        case SET_FOLDS:
            return {...state, folders: [...action.payload]};

        case APPEND_FOLDS:
            return {...state, folders: [...state.folders, ...action.payload]};

        case CLEAR_FOLDS:
            return {...state, folders: []};

        case SET_SELECTED_FOLD_ID:
            return {...state, selectedFoldId: action.payload};

        default:
            return state;
    }
}


export const setFolds = (payload) => ({type: SET_FOLDS, payload});
export const appendFolds = (payload) => ({type: APPEND_FOLDS, payload});
export const clearFolds = () => ({type: CLEAR_FOLDS, payload: ''});
export const setSelectedFolderId = (payload) => ({type: SET_SELECTED_FOLD_ID, payload});

export default reducer;