const SET_USER = 'SET_USER';


const defaultState = {}

const reducer = (state = defaultState, action) => {

    switch (action.type) {
        case SET_USER:
            return {...action.payload};

        default:
            return state;
    }
}


export const setUser = (payload) => ({type: SET_USER, payload: payload});

export default reducer;