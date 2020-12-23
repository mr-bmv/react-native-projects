import getGroups from "../actions/getGroups"
import removeFromGroup from "../actions/removeFromGroup"
import setGroups from "../actions/setGroups"
import { CHANGE_THEME, FETCH_PEOPLE_FAILURE, GET_USERS, SET_GROUP, REMOVE_PERSON, SET_LOADING, DELETE_GROUP, CREATE_GROUP, SET_FRIENDS } from "../actionTypes/randomTypes"

const handlers = {
  [GET_USERS]: (state, { payload }) => ({ ...state, users: payload, loading: false }),
  [SET_LOADING]: state => ({ ...state, loading: true }),
  [CHANGE_THEME]: state => ({ ...state, darkTheme: !state.darkTheme }),
  [FETCH_PEOPLE_FAILURE]: (state, { payload }) => ({ ...state, loading: false, error: payload }),
  [DELETE_GROUP]: (state, { payload }) => ({ ...state, groups: getGroups(state.groups, payload) }),
  [CREATE_GROUP]: (state, { payload }) => ({ ...state, groups: setGroups(state.groups, payload) }),
  [SET_FRIENDS]: (state, { payload }) => ({ ...state, friends: { ...state.friends, ...payload } }),
  [REMOVE_PERSON]: (state, { payload }) => ({ ...state, groups: removeFromGroup(state.groups, payload) }),
  [SET_GROUP]: (state, { payload }) => {
    const personId = Object.keys(payload.data)[0]
    if (state.groups[payload.id].indexOf(personId) === -1) {
      return ({
        ...state,
        groups: {
          ...state.groups,
          [payload.id]: [
            ...state.groups[payload.id],
            personId
          ]
        }
      })
    }
    return state;
  },
  DEFAULT: (state) => state
}


export const RandomReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
};