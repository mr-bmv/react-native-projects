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
    };

    const filterPeople = async (filterList = '') => {
        try {
            const response = await service.getPeople(filterList);
            dispatch({ type: GET_USERS, payload: response })
        } catch (error) {
            dispatch({ type: FETCH_PEOPLE_FAILURE, payload: error })
        }
    };

    const setLoading = () => {
        dispatch({ type: SET_LOADING })
    };

    const changeTheme = () => {
        dispatch({ type: CHANGE_THEME })
    };

    return (
        <RandomContext.Provider
            value={{
                state,
                getUsers,
                filterPeople,
                changeTheme
            }}
        >
            { children}
        </RandomContext.Provider>
    )
}

export default RandomProvider;