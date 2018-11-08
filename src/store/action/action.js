import ActionTypes from "../constant/constant"





export const currentUserAction = (data) => {
    return dispatch => {
        dispatch({
            type: ActionTypes.CURRENT_USER_DATA,
            payload: data,
        })
    }
}



export const allUsersList = (data) => {
    return dispatch => {
        dispatch({
            type: ActionTypes.ALL_USER_LIST,
            payload: data,
        })
    }
}



export const userRequestAction = (data) => {
    return dispatch => {
        dispatch({
            type: ActionTypes.REQUEST_LIST,
            payload: data,
        })
    }
}

export const myRequestAction = (data) => {
    return dispatch => {
        dispatch({
            type: ActionTypes.MY_REQUEST_ACTION,
            payload: data,
        })
    }
}



export const selectedRequest = (data) => {
    return dispatch => {
        dispatch({
            type: ActionTypes.SELECTED_REQUEST,
            payload: data,
        })
    }
}





