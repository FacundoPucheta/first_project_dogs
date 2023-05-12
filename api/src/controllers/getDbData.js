const { Dog, Temperament } = require("../db");

const getDbData = async () =>
  await Dog.findAll({
    include: {
      model: Temperament,
      atributes: ["name"],
      through: {
        atributes: [],
      },
    },
  });

module.exports = getDbData;
