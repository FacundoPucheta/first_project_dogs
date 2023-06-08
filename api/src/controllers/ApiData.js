require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const URL = "https://api.thedogapi.com/v1/breeds";

const getApiData = async () =>
  await axios.get(`${URL}?${API_KEY}`).then(({ data }) => {
    const dogsInfo = data.map((dog) => {
      return {
        id: dog.id,
        image: dog.image?.url,
        name: dog.name,
        weight: dog.weight.metric,
        height: dog.height.metric,
        life_span: dog.life_span,
        belongToDb: false,
        temperament: dog.temperament,
      };
    });
    if(!dogsInfo.length) throw Error ("Info cant be properly obtained.")
    return dogsInfo;
  });

module.exports = getApiData;
