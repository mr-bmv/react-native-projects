// Remove person from current group
const removeFromGroup = (groups, data) => {
    const groupName = data[0]
    const personId = data[1]
    const newGroupArray = groups[groupName].filter(person => person != personId);
    return { ...groups, [groupName]: newGroupArray }
};

export default removeFromGroup;