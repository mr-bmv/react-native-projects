const getGroups = (state, group) => {
    delete state[group];
    return state;
}

export default getGroups;