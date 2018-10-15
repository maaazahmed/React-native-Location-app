import ActionTypes from "../constant/constant"





export const screenTitleAction = (data) => {
    return dispatch => {
        dispatch({
            type: ActionTypes.BACK_TO_SIGNIN,
            payload: data,
        })
    }
}

