import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
   goToSignUp:()=>{}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.GO_TO_SIGNIN:
            return ({
                ...state,
                goToSignUp: action.payload
            })
        default:
            return state;
    }
}
