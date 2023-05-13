const getAllDogs = require("../../controllers/dogControllers/AllDogs");
const getDogById = require("../../controllers/dogControllers/DogById");
const getDogByName = require("../../controllers/dogControllers/DogByName");
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
  
  try {
    const {name} = req.query;
    console.log(name);
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

// dogsRouter.post("/", (req, res) => {
//     //blablabla
//     try {

//     } catch (error) {

//     }
// });

module.exports = dogsRouter;
