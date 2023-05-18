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
    let dbDogs = await Dog.findByPk(id, {
      include: {
        model: Temperament,
        atributes: ["name"],
        through: {
          atributes: [],
        },
      },
    });

    if (!dbDogs) throw Error(`No dogs found with ID: ${id}.`);
    return dbDogs;
  };

  if (source === "DB") {
    const dbDogs = await getDbDogs(id);
    const temperProp = await dbDogs.temperaments
      .map(
        (temper) => temper.name.charAt(0).toUpperCase() + temper.name.slice(1)
      )
      .join(", ");

    const newDbDog = {
      id: dbDogs.id,
      image: dbDogs.image,
      name: dbDogs.name,
      weight: dbDogs.weight,
      height: dbDogs.height,
      life_span: dbDogs.life_span,
      belongToDb: dbDogs.belongToDb,
      temperament: temperProp,
    };

    return newDbDog;
  }

  return getApiDogs(id);
};

module.exports = getDogById;
