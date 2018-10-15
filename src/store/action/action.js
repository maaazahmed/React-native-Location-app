import ActionTypes from "../constant/constant"





export const signUpScreenHideAction = (data) => {
    return dispatch => {
        dispatch({
            type: ActionTypes.BACK_TO_SIGNIN,
            payload: data,
        })
    }
}

