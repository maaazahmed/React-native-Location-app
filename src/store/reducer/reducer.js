import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
   backToSignIn:()=>{}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.BACK_TO_SIGNIN:
            return ({
                ...state,
                backToSignIn: action.payload
            })
        default:
            return state;
    }
}
