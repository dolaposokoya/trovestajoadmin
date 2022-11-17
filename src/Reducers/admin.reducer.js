import { AGENT_REQUEST, CREATE_AGENT } from '../Actions/Actions'
import { user_storage_name } from '../config'

const initialState = {
    data: {},
    message: '',
    success: false,
    loading: true
}

export const addAgentAction = (action) => {
    return {
        type: AGENT_REQUEST,
        payload: action,
    }
}
export const createAgentAction = (action) => {
    return {
        type: CREATE_AGENT,
        success: action.success,
        message: action.message,
        data: action.payload,
        loading: action.loading
    }
}


export const addAgentReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_AGENT:
            return {
                ...state,
                success: action.success,
                data: action.data,
                message: action.message,
                loading: action.loading
            }
        default:
            return state;
    }
}
