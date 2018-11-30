import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    currentUser: {},
    selectedRequest: {},
    allUserList: [],
    requestList: [],
    myRequestList: [],
    friendList: [],

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
        case ActionTypes.REQUEST_LIST:
            return ({
                ...state,
                requestList: action.payload
            })
        case ActionTypes.MY_REQUEST_ACTION:
            return ({
                ...state,
                myRequestList: action.payload
            })
        case ActionTypes.SELECTED_REQUEST:
            return ({
                ...state,
                selectedRequest: action.payload
            })
        case ActionTypes.FRIEND_LIST:
            return ({
                ...state,
                friendList: action.payload
            })
        default:
            return state;
    }
}
