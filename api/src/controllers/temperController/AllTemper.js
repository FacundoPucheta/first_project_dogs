const savedInfo = require("../ApiData");
const { Temperament } = require("../../db");

const getAllTemper = async () => {
  const allTemperDB = await Temperament.findAll();

  if (allTemperDB.length === 0) {
    // for get an array of tempers(strings)
    const getTemper = savedInfo
      .map((dog) => dog.temperament)
      .join(", ")
      .split(", ");

    const getFilteredTemper = getTemper.filter((temper) => temper !== "");

    getFilteredTemper.forEach(async (temper) => {
      await Temperament.findOrCreate({
        where: { name: temper.toLowerCase() },
      });
    });

    const allTemper = await Temperament.findAll();
    if (!allTemper) throw Error("Can't get temperaments form DB");

    return allTemper;
  } else {
    return allTemperDB;
  }
};

module.exports = getAllTemper;
