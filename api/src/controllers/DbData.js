const { Dog, Temperament } = require("../db");

const getAlphaDbData = async () =>
  await Dog.findAll({
    include: {
      model: Temperament,
      atributes: ["name"],
      through: {
        atributes: [],
      },
    },
  });

const getDbData = async () => {
  const dbAlphaData = await getAlphaDbData();
  const dbData = await dbAlphaData.map((dog) => {
    return {
      id: dog.id,
      image: dog.image,
      name: dog.name,
      weight: dog.weight,
      height: dog.height,
      life_span: dog.life_span,
      belongToDb: dog.belongToDb,
      temperament: dog.temperaments
        .map((temp) => temp.name.charAt(0).toUpperCase() + temp.name.slice(1))
        .join(", "),
    };
  });
  return dbData;
};
module.exports = getDbData;
