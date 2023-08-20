require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const URL = "https://api.thedogapi.com/v1/breeds";
const imageURL = "https://api.thedogapi.com/v1/images";

const getDogData = async () => {

  const response = await axios.get(URL, { headers: { "x-api-key": API_KEY} });
  const dogs = response.data;
  
  const mappedDogs = await Promise.all(
    dogs.map(async (dog) => {
      const imageResponse = await axios.get(`${imageURL}/${dog.reference_image_id}`, { headers: {"x-api-key": API_KEY} } );
      const image = imageResponse.data.url;

      return {
        id: dog.id,
        image: image,
        name: dog.name,
        weight: dog.weight.metric,
        height: dog.height.metric,
        life_span: dog.life_span,
        belongToDb: false,
        temperament: dog.temperament,
      };
    })
  );

  if (!mappedDogs.length) throw Error("Info cant be properly obtained.");
  return mappedDogs;
};

module.exports = getDogData;
