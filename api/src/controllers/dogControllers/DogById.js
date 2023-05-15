const getApiData = require("../ApiData");
const { Dog, Temperament } = require("../../db");

const getDogById = async (id, source) => {
  
  const getApiDogs = async (id) => {
    let apiDogs = await getApiData();
    apiDogs = apiDogs.find((dog) => dog.id === +id);
    if (!apiDogs) throw Error(`No dogs found with ID: ${id}.`);
    return apiDogs;
  };

  const getDbDogs = async (id) => {
    const dbDogs = await Dog.findByPk(id, {
      include: {
        model: Temperament,
        atributes: ["name"],
        through: {
          atributes: [],
        },
      },
    });

    return dbDogs;
  };

  const dogById = source === "DB" ? await getDbDogs(id) : await getApiDogs(id);

  return dogById;
};

module.exports = getDogById;
