import ActionTypes from "../constant/constant"





export const currentUserAction = (data) => {
    return dispatch => {
        dispatch({
            type: ActionTypes.CURRENT_USER_DATA,
            payload: data,
        })
    }
}

