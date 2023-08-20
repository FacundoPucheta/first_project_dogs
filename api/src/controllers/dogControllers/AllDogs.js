const savedInfo = require("../ApiData");
const getDbData = require("../DbData");

const getAllDogs = async () => {
  const infoDb = await getDbData();
  const allDogs = [...savedInfo, ...infoDb];

  if (!allDogs.length) throw Error("No dogs found.");
  return allDogs;
};

module.exports = getAllDogs;
