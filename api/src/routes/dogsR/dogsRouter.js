const dogsRouter = require("express").Router();
const { allDogs, idBreedsDogs, createDog } = require("../../handlers/dogsHandlers/dogsHandlers");

dogsRouter.get("/", allDogs);
dogsRouter.get("/:id", idBreedsDogs);
dogsRouter.post("/", createDog);

module.exports = dogsRouter;
