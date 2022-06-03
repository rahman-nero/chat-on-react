const defaultState = {}

const reducer = (state = defaultState, action) => {

    switch (action.type) {
        case SET_USER:
            return {...action.payload};

        default:
            return state;
    }
}


const SET_USER = 'SET_USER';

export default reducer;