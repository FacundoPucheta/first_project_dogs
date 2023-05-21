const { Dog, Temperament } = require("../../db");

const postNewDog = async ({
  image,
  name,
  weight,
  height,
  life_span,
  temperament,
}) => {
  //temp sea un array
  console.log(temperament)
  const newDog = await Dog.create({
    image,
    name,
    weight,
    height,
    life_span,
  });

  temperament = temperament.map((temper) => temper.toLowerCase().trim());

  const newTemperament = [...new Set(temperament)];

  newTemperament.forEach(async (temper) => {
    const findTemper = await Temperament.findOne({
      where: { name: temper },
    });

    newDog.addTemperament(findTemper);
    
  });
};
module.exports = postNewDog;
