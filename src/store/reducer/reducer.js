import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
   backToSignIn:()=>{}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.CONFERM_RESULT:
            return ({
                ...state,
                backToSignIn: action.payload
            })
        default:
            return state;
    }
}
