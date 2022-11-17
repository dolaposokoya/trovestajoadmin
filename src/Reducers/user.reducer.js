import { SIGN_IN_REQUEST, SIGN_IN_SUCCESSFUL, SIGN_OUT } from '../Actions/Actions'
import { user_storage_name } from '../config'

const initialState = {
    isLogged: false,
    success: false,
    token: '',
    data: [],
    message: ''
}

export const getUserAction = () => {
    return {
        type: SIGN_IN_REQUEST
    }
}
export const loginUserAction = (action) => {
    return {
        type: SIGN_IN_SUCCESSFUL,
        data: action.payload,
        isLogged: action.isLogged,
        success: action.success,
        message: action.message
    }
}


export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN_SUCCESSFUL:
            return {
                ...state,
                success: action.success,
                isLogged: true,
                data: action.data,
                message: action.message
            }
        case SIGN_OUT:
            localStorage.removeItem(user_storage_name)
            return {
                ...state,
                success: false,
                isLogged: false,
                data: {},
                message: 'User logged out'
            };
        default:
            return state;
    }
}


export const resetPasswordReducer = () => {

}