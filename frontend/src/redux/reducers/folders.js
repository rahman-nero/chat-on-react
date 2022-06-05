const SET_FOLDS = 'SET_FOLDS';
const CLEAR_FOLDS = 'CLEAR_FOLDS';
const SET_SELECTED_FOLD_ID = 'SET_SELECTED_FOLD_ID';


const defaultState = {
    selectedFoldId: 1,
    folders: []
}

const reducer = (state = defaultState, action) => {

    switch (action.type) {
        case SET_FOLDS:
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
export const clearFolds = () => ({type: CLEAR_FOLDS, payload: ''});
export const setSelectedFolderId = (payload) => ({type: SET_SELECTED_FOLD_ID, payload});

export default reducer;