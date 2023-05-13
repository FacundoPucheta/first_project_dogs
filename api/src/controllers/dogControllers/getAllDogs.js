const getApiData = require("../getApiData");
const getDbData = require("../getDbData");

const getAllDogs = async () => {
  const infoApi = await getApiData();
  const infoDb = await getDbData();
  
  const allDogs = [...infoApi, ...infoDb];
  if (!allDogs.length) throw Error("No se encontraron perros para mostrar.");
  return allDogs;
};

module.exports = getAllDogs;
