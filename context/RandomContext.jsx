import React, { useContext, useState, useReducer } from 'react'
import { GET_USERS, SET_LOADING, CHANGE_THEME, FETCH_PEOPLE_FAILURE, SET_GROUP, DELETE_GROUP, SET_FRIENDS, CREATE_GROUP } from '../actionTypes/randomTypes';
import { RandomReducer } from '../reducers/RandomReducer';
import RandomService from '../services/random-person-service'
import { COLORS } from '../constants/colors';

const service = new RandomService();

const RandomContext = React.createContext();

export const useRandomContext = () => {
  return useContext(RandomContext)
};

const RandomProvider = ({ children }) => {

  const initialState = {
    users: [],
    friends: {},
    groups: {},
    loading: false,
    darkTheme: true,
    error: false,
  }

  const [state, dispatch] = useReducer(RandomReducer, initialState)

  const getUsers = async () => {
    setLoading();
    const response = await service.getNationality();

    dispatch({ type: GET_USERS, payload: response })
  };

  const filterPeople = async (filterList = '') => {
    try {
      const response = await service.getPeople(filterList);
      dispatch({ type: GET_USERS, payload: response })
    } catch (error) {
      dispatch({ type: FETCH_PEOPLE_FAILURE, payload: error })
    }
  };

  const setFriends = (friend) => {
    dispatch({ type: SET_FRIENDS, payload: friend })
  }
  const setLoading = () => {
    dispatch({ type: SET_LOADING })
  };

  const setGroup = (title) => {
    setFriends(title.data);
    dispatch({ type: SET_GROUP, payload: title });
  }

  const changeTheme = () => {
    dispatch({ type: CHANGE_THEME })
  };

  const deleteGroup = (group) => {
    dispatch({ type: DELETE_GROUP, payload: group })
  };

  const createGroup = (name) => {
    dispatch({ type: CREATE_GROUP, payload: name })
  };

  const theme = state.darkTheme ? COLORS.dark : COLORS.light;

  // console.log("STATE - ", state)

  return (
    <RandomContext.Provider
      value={{
        state,
        theme,
        getUsers,
        filterPeople,
        changeTheme,
        setGroup,
        deleteGroup,
        createGroup
      }}
    >
      { children}
    </RandomContext.Provider>
  )
}

export default RandomProvider;