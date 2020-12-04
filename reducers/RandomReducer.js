import { CHANGE_THEME, FETCH_PEOPLE_FAILURE, GET_USERS, SET_LOADING } from "../actionTypes/randomTypes"

const handlers = {
    [GET_USERS]: (state, { payload }) => ({ ...state, users: payload, loading: false }),
    [SET_LOADING]: state => ({ ...state, loading: true }),
    [CHANGE_THEME]: (state) => ({ ...state, darkTheme: !state.darkTheme }),
    [FETCH_PEOPLE_FAILURE]: (state, { payload }) => ({ ...state, loading: false, error: payload }),
    DEFAULT: (state) => state
}


export const RandomReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}