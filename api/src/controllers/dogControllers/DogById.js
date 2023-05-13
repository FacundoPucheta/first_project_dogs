const getAllDogs = require("./AllDogs");

const getDogById = async (id) => {
  
  const allDogs = await getAllDogs();
  const dogById = allDogs.find((dog) => dog.id === +id);

  if (!dogById) throw Error(`No dogs with the ID:${id} found.`);

  return dogById;
};

module.exports = getDogById;
