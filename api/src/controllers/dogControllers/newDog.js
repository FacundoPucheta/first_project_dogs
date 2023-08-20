const { Dog, Temperament } = require("../../db");

const postNewDog = async ({
  image,
  name,
  weight,
  height,
  life_span,
  temperament,
}) => {
  const newDog = await Dog.create({
    image,
    name,
    weight,
    height,
    life_span,
  });

  temperament = temperament.map((temper) => temper.toLowerCase().trim());

  const newTemperament = [...new Set(temperament)];

  for (const temper of newTemperament) {
    const findTemper = await Temperament.findOne({ where: { name: temper } });
    if (!findTemper) throw new Error(`Temperament "${temper.toUpperCase()}" not valid`);

    await newDog.addTemperament(findTemper);
  } 
};
module.exports = postNewDog;
