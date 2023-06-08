const getAllDogs = require("./AllDogs");

const getDogByName = async (name) => {
    if (!name) throw Error("No info has been sent.");

    const allDogs = await getAllDogs();

    const dogsFound = allDogs.filter((dog) => dog.name.toLowerCase().includes(name.toLowerCase()));

    if(!dogsFound.length) throw Error(`No breeds with the name '${name}' found.`);

    return dogsFound;

};

module.exports = getDogByName;