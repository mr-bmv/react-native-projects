import { GET_USERS, SET_LOADING } from "../actionTypes/randomTypes"

const handlers = {
    [GET_USERS]: (state, { payload }) => ({ ...state, users: payload, loading: false }),
    [SET_LOADING]: state => ({ ...state, loading: true }),
    DEFAULT: (state) => state
}


export const RandomReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}