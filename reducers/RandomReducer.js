import getGroups from "../actions/getGroups"
import setGroups from "../actions/setGroups"
import { CHANGE_THEME, FETCH_PEOPLE_FAILURE, GET_USERS, SET_GROUP, SET_LOADING, DELETE_GROUP, CREATE_GROUP } from "../actionTypes/randomTypes"

const handlers = {
  [GET_USERS]: (state, { payload }) => ({ ...state, users: payload, loading: false }),
  [SET_LOADING]: state => ({ ...state, loading: true }),
  [CHANGE_THEME]: state => ({ ...state, darkTheme: !state.darkTheme }),
  [FETCH_PEOPLE_FAILURE]: (state, { payload }) => ({ ...state, loading: false, error: payload }),
  [DELETE_GROUP]: (state, { payload }) => ({ ...state, groups: getGroups(state.groups, payload) }),
  [CREATE_GROUP]: (state, { payload }) => ({ ...state, groups: setGroups(state.groups, payload) }),
  [SET_GROUP]: (state, { payload }) => {
    return (

      {
        ...state,
        groups: {
          ...state.groups,
          [payload.id]: [
            ...state.groups[payload.id],
            ...payload.data
          ]
        }
      })
  },
  DEFAULT: (state) => state
};

export const RandomReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
};