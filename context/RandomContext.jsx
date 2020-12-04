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

    const getByGender = async (genderList) => {
        setLoading();

        console.log('genderList - ', genderList)

        if ((genderList.male && genderList.female)
            || (!genderList.male && !genderList.female)) {
            console.log('Should be all users')
            getUsers();
        } else {
            const response = await service.getGender(genderList);

            dispatch({ type: GET_USERS, payload: response })
        }
    }

    const filterPeople = async (filterList = '') => {
        const response = await service.getPeople(filterList);
        dispatch({ type: GET_USERS, payload: response })
    }

    const setLoading = () => {
        dispatch({ type: SET_LOADING })
    }

    return (
        <RandomContext.Provider value={
            {
                state,
                getUsers,
                getByGender,
                filterPeople
            }}
        >
            { children}
        </RandomContext.Provider>
    )
}

export default RandomProvider;