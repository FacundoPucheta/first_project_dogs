const allTemper = require("../../handlers/temperHandlers/temperHandlers");
const temperRouter = require("express").Router();

//Acá importaremos los handlers

temperRouter.get("/", allTemper);

module.exports = temperRouter;
