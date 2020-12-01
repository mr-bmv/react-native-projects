import React, { useContext, useState, useReducer } from 'react'
import { GET_USERS, SET_LOADING } from '../actionTypes/randomTypes';
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
        loading: false
    }

    const [state, dispatch] = useReducer(RandomReducer, initialState)

    const getUsers = async () => {
        setLoading();
        const response = await service.getNationality();

        dispatch({ type: GET_USERS, payload: response })
    }

    const setLoading = () => {
        dispatch({ type: SET_LOADING })
    }

    return (
        <RandomContext.Provider value={
            {
                state,
                getUsers
            }}
        >
            { children}
        </RandomContext.Provider>
    )
}

export default RandomProvider;