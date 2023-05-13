const getApiData = require("../getApiData");
const { Temperament } = require("../../db");

const getAllTemper = async () => {
  const getDogs = await getApiData();

  // for get an array of tempers(stirngs)
  const getTemper = getDogs
    .map((dog) => dog.temperament)
    .join("")
    .split(/,\s*/);

  getTemper.forEach((temper) => {
    Temperament.findOrCreate({
      where: { name: temper },
    });
  });

  const allTemper = Temperament.findAll();
  if (!allTemper) throw Error("No se han podido obtener los temperamentos desde la DB");

  return allTemper;
};

module.exports = getAllTemper;
