const getAllDogs = require("../../controllers/dogControllers/AllDogs");
const getDogById = require("../../controllers/dogControllers/DogById");
const getDogByName = require("../../controllers/dogControllers/DogByName");
const postNewDog = require("../../controllers/dogControllers/newDog");

const allDogs = async (req, res) => {
  const { name } = req.query;
  try {
    const getDogs = name ? await getDogByName(name) : await getAllDogs();
    return res.status(200).json(getDogs);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

const idBreedsDogs = async (req, res) => {
  const { id } = req.params;
  const source = isNaN(id) ? "DB" : "dogsApi";
  try {
    const dogById = await getDogById(id, source);
    return res.status(200).json(dogById);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

const createDog = async (req, res) => {
  const { image, name, weight, height, life_span, temperament } = req.body;
  try {
    await postNewDog({ image, name, weight, height, life_span, temperament });
    return res.status(200).json({ message: "Breed added successfully" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  allDogs,
  idBreedsDogs,
  createDog,
};
