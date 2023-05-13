const { Dog, Temperament } = require("../../db");

const postNewDog = async ({image, name, weight, height, life_span, temperament}) => {
 
const newDog = await Dog.create({
    image,
    name,
    weight,
    height,
    life_span,
});

const findTemper = await Temperament.findOne({
    where: { name: temperament.toLowerCase()},
})
if(!findTemper) throw Error("Temperament not valid")

newDog.addTemperament(findTemper);

};
module.exports = postNewDog;