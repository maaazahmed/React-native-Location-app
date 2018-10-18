import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    currentUser: {}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.CURRENT_USER_DATA:
            return ({
                ...state,
                currentUser: action.payload
            })
        default:
            return state;
    }
}
