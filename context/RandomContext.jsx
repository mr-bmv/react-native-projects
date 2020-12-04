import React, { useContext, useState, useReducer } from 'react'
import { GET_USERS, SET_LOADING, CHANGE_THEME, FETCH_PEOPLE_FAILURE } from '../actionTypes/randomTypes';
import { RandomReducer } from '../reducers/RandomReducer';
import RandomService from '../services/random-person-service'

const service = new RandomService();

const RandomContext = React.createContext();

export const useRandomContext = () => {
    return useContext(RandomContext)
}

const RandomProvider = ({ children }) => {

    const initialState = {
        users: [],
        loading: false,
        darkTheme: false,
        error: false
    }

    const [state, dispatch] = useReducer(RandomReducer, initialState)

    const getUsers = async () => {
        setLoading();
        const response = await service.getNationality();

        dispatch({ type: GET_USERS, payload: response })
    }

    const getByGender = async (genderList) => {
        setLoading();

        if ((genderList.male && genderList.female)
            || (!genderList.male && !genderList.female)) {
            getUsers();
        } else {
            const response = await service.getGender(genderList);
            dispatch({ type: GET_USERS, payload: response })
        }
    }

    const filterPeople = async (filterList = '') => {
        try {
            const response = await service.getPeople(filterList);
            dispatch({ type: GET_USERS, payload: response })
        } catch (error) {
            dispatch({ type: FETCH_PEOPLE_FAILURE })
        }
    }

    const setLoading = () => {
        dispatch({ type: SET_LOADING })
    }

    const changeTheme = () => {
        dispatch({ type: CHANGE_THEME })
    }

    return (
        <RandomContext.Provider value={
            {
                state,
                getUsers,
                getByGender,
                filterPeople,
                changeTheme
            }}
        >
            { children}
        </RandomContext.Provider>
    )
}

export default RandomProvider;