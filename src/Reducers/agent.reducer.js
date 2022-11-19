import { AGENT_REQUEST, CREATE_AGENT, GET_AGENTS } from '../Actions/Actions'
import { user_storage_name } from '../config'

const initialState = {
    data: [],
    agents: []
}


export const addAgentAction = (action) => {
    return {
        type: AGENT_REQUEST,
        payload: action,
    }
}

export const setAgentAction = (action) => {
    return {
        type: AGENT_REQUEST,
        data: action.payload,
    }
}

export const agentReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_AGENT:
            return {
                ...state,
                data: action.data,
            }
        case GET_AGENTS:
            return {
                ...state,
                agents: action.data,
            }
        default:
            return state;
    }
}
