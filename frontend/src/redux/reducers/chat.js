const SET_SELECTED_CHAT_ID = 'SET_SELECTED_CHAT_ID';
const SET_CHAT_INFO = 'SET_CHAT_INFO';
const SET_MESSAGES = 'SET_MESSAGES';
const APPEND_MESSAGE = 'APPEND_MESSAGE';

const defaultState = {
  selectedChatId: null,
  chatInfo: {},
  messages : []
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_SELECTED_CHAT_ID:
            return {...state, selectedChatId: action.payload}

        case SET_CHAT_INFO:
            return {...state, chatInfo: action.payload}


        case SET_MESSAGES:
            return {...state, messages: [...action.payload]}

        case APPEND_MESSAGE:
            return {...state, messages: [...state.messages, action.payload]}

        default:
            return state;
    }
}

export const setSelectedChatId = (payload) => ({type: SET_SELECTED_CHAT_ID, payload});
export const setChatInfo = (payload) => ({type: SET_CHAT_INFO, payload});
export const setMessages = (payload) => ({type: SET_MESSAGES, payload});
export const appendMessage = (payload) => ({type: APPEND_MESSAGE, payload});

export default reducer
