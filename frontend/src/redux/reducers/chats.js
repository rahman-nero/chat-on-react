const defaultState = {}

const reducer = (state = defaultState, action) => {

    switch (action.type) {
        case SET_CHATS:
            return {...action.payload};

        default:
            return state;
    }
}


const SET_CHATS = 'SET_CHATS';

export default reducer;