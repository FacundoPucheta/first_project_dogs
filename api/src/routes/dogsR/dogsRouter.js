const dogsRouter = require("express").Router();
const {
  allDogs,
  idRazaDogs,
  createDog,
} = require("../../handlers/dogsHandlers/dogsHandlers");

dogsRouter.get("/", allDogs);

dogsRouter.get("/:id", idRazaDogs);

dogsRouter.post("/", createDog);

module.exports = dogsRouter;
