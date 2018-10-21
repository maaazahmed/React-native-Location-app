import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    currentUser: {},
    allUserList: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.CURRENT_USER_DATA:
            return ({
                ...state,
                currentUser: action.payload
            })
        case ActionTypes.ALL_USER_LIST:
            return ({
                ...state,
                allUserList: action.payload
            })
        default:
            return state;
    }
}
