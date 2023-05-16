const dogsRouter = require("express").Router();
const { allDogs, idBreedsDogs, createDog } = require("../../handlers/dogsHandlers/dogsHandlers");
const validate = require("../../middlewares/validate");


dogsRouter.get("/", allDogs);
dogsRouter.get("/:id", idBreedsDogs);
dogsRouter.post("/", validate, createDog);

module.exports = dogsRouter;
