const SET_SELECTED_CHAT_ID = 'SET_SELECTED_CHAT_ID';
const SET_CHAT_INFO = 'SET_CHAT_INFO';

const defaultState = {
  selectedChatId: null,
  chatInfo: {}
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_SELECTED_CHAT_ID:
            return {...state, selectedChatId: action.payload}

        case SET_CHAT_INFO:
            return {...state, chatInfo: action.payload}
        default:
            return state;
    }
}

export const setSelectedChatId = (payload) => ({type: SET_SELECTED_CHAT_ID, payload});
export const setChatInfo = (payload) => ({type: SET_CHAT_INFO, payload});

export default reducer
