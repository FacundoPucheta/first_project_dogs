const getApiData = require("../ApiData");
const getDbData = require("../DbData");

const getAllDogs = async () => {
  const infoApi = await getApiData();
  const infoDb = await getDbData();
  
  const allDogs = [...infoApi, ...infoDb];
  if (!allDogs.length) throw Error("No dogs found.");
  return allDogs;
};

module.exports = getAllDogs;
