const express = require("express");
const route = express.Router();
const idea_controller = require("../controllers/ideas.controller.js");


/**
 * Start define the routes
 */

/**
 * Route for featch all ideas - 127.0.0.1:8080/ideas_app/v1/ideas
 */

route.get("/ideas", idea_controller.getAllIdeas);


/**
 * Routes for fetching idea based on the id
 */

route.get("/ideas/:id", idea_controller.getIdeaBasedOnId);

/**
 * Routes for creating new idea
 */

route.post("/ideas", idea_controller.createIdea);


/**
 * Route for updating the existing idea
 */

route.post("/ideas/:id", idea_controller.updateIdea);

/**
 * Route for deleting the existing idea
 */
route.delete("/ideas/:id", idea_controller.deleteIdea);


module.exports = route;