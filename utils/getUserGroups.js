/**
 * Generate string which contain all groups where user contained
 * @param {object} groups
 * @param {object} user
 * return string
 */
const getUserGroups = (groups, user) => {
    console.log('Start generate string')
    console.log(' Object of groups')
    console.log(groups)
    console.log('----------------')
    console.log('User')
    console.log(user)
    return Object.keys(groups).reduce((prevValue, group) => {
        if (groups[group].indexOf(user) > -1) {

            const groupStr = String(group);
            const result = prevValue ? `${prevValue}/${groupStr}` : `${groupStr}`
            console.log("RESULT")
            console.log(result)
            return result

        }
        console.log('No')
        return prevValue;
    },
        '')
}

export default getUserGroups;