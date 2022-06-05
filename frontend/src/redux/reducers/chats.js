const SET_CHATS = 'SET_CHATS';

const defaultState = [];

const reducer = (state = defaultState, action) => {

    switch (action.type) {
        case SET_CHATS:
            return [...action.payload];

        default:
            return state;
    }
}


export const setChats = (payload) => ({type: SET_CHATS, payload});

export default reducer;