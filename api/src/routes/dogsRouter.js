const dogsRouter = require("express").Router();
//Aca importare los handlers!

dogsRouter.get("/", allDogs); //allDogs es un handler
//añadir el trycatch completo con su controller. Luego modularizas en handlers

dogsRouter.get("/:idRaza", idRazaDogs);

dogsRouter.get("/name", byNameDogs);

dogsRouter.post("/", createDogs);

module.exports = dogsRouter;