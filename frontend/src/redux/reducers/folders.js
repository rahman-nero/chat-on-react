const defaultState = []

const reducer = (state = defaultState, action) => {

    switch (action.type) {
        case SET_FOLDS:
            return [...state, ...action.payload];

        case CLEAR_FOLDS:
            return [];

        default:
            return state;
    }
}


const SET_FOLDS = 'SET_FOLDS';
const CLEAR_FOLDS = 'CLEAR_FOLDS';

export const setFolds = (payload) => ({type: SET_FOLDS, payload: payload});
export const clearFolds = () => ({type: CLEAR_FOLDS, payload: ''});

export default reducer;