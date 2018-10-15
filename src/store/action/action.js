import ActionTypes from "../constant/constant"





export const signInScreenHideAction = (data) => {
    return dispatch => {
        dispatch({
            type: ActionTypes.GO_TO_SIGNUP,
            payload: data,
        })
    }
}

