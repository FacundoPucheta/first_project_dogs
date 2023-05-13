const getAllDogs = require("../../controllers/dogControllers/AllDogs");
const getDogById = require("../../controllers/dogControllers/DogById");
const getDogByName = require("../../controllers/dogControllers/DogByName");
const postNewDog = require("../../controllers/dogControllers/newDog");
const dogsRouter = require("express").Router();
//Aca importare los handlers!

dogsRouter.get("/", async (req, res) => {
  try {
    const allDogs = await getAllDogs();
    return res.status(200).json(allDogs);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

dogsRouter.get("/name", async (req, res) => {
  // esta bien así? o teiene que ser "/name?="
  try {
    const { name } = req.query;
    const dogByName = await getDogByName(name);
    return res.status(200).json(dogByName);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

dogsRouter.get("/:idRaza", async (req, res) => {
  try {
    const { idRaza } = req.params;
    const dogById = await getDogById(idRaza);
    return res.status(200).json(dogById);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

dogsRouter.post("/", async (req, res) => {
  try {
    const { image, name, weight, height, life_span, temperament } = req.body;
    await postNewDog({ image, name, weight, height, life_span, temperament });
    return res.status(200).json({ message: "Breed added successfully" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

module.exports = dogsRouter;
