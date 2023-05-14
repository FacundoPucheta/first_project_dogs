const getApiData = require("../ApiData");
const { Temperament } = require("../../db");

const getAllTemper = async () => {
  const allTemperDB = await Temperament.findAll();

  if (allTemperDB.length === 0) {
    const getDogs = await getApiData();

    // for get an array of tempers(stirngs)
    const getTemper = getDogs
      .map((dog) => dog.temperament)
      .join(", ")
      .split(", ");

    const getFilteredTemper = getTemper.filter((temper) => temper !== "");

    getFilteredTemper.forEach((temper) => {
      Temperament.findOrCreate({
        where: { name: temper.toLowerCase() },
      });
    });

    const allTemper = Temperament.findAll();
    if (!allTemper) throw Error("Can't get temperaments form DB");

    return allTemper;
  } else {
    return allTemperDB;
  }
};

module.exports = getAllTemper;
