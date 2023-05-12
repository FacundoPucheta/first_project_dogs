const getAllDogs = require("../../controllers/dogControllers/getAllDogs");
const dogsRouter = require("express").Router();
//Aca importare los handlers!

dogsRouter.get("/", async (req, res) => {
  try {
    const allDogs = await getAllDogs();
    return res.status(200).json(allDogs);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}); //allDogs es un handler
//añadir el trycatch completo con su controller. Luego modularizas en handlers

// dogsRouter.get("/:idRaza", idRazaDogs);

// dogsRouter.get("/name", byNameDogs);

// dogsRouter.post("/", (req, res) => {
//     //blablabla
//     try {

//     } catch (error) {

//     }
// });

module.exports = dogsRouter;
