// remove person from friends if he don't contained in other groups
const cleanUpFriends = (groups, friends, person) => {
    // Object.keys(groups).map(group => groups[group].indexOf(person))
    console.log('-Array of groups id-')
    console.log(Object.keys(groups))
    const qty = Object.keys(groups).reduce((baseNumber, group) => {
        if (groups[group].indexOf(person) > -1) {
            return ++baseNumber;
        } return baseNumber;
    }
        , 0)
    if (qty === 0) {
        delete friends[person]
        console.log()
        console.log()
        console.log('Person was removed')
        console.log()
        console.log()
        console.log()

    }

    return friends;
}

export default cleanUpFriends;