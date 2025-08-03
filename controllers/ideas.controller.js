const ideas = require("../models/ideas.model.js");

let id = 3;  //initial last id number of the stored

/**
 * Controller to featch all the ideas present in the system
 */

exports.getAllIdeas = (req, res) => {
    //I will have to read idea from the idea model file
    res.status(200).send(ideas);
    
}


/**
 *  Controllers to featch the idea based on the idea id
 */

exports.getIdeaBasedOnId = (req, res) => {
    const idea_id = req.params.id;

    if(ideas[idea_id]){
        res.status(200).send(ideas[idea_id]);
    }else {
        console.log(`Idea with the id : ${idea_id} is not present`);
        res.status(404).send({
            message : `Idea with the id : ${idea_id} is not present`
        });
    }
}


/**
 * Controllers to create a new idea
 */

exports.createIdea = (req, res) => {
    //Logic to create the idea!
    id++;
    // Read the request body
    idea_object = req.body;
    //console.log(idea_object);
    idea_object["id"] = id;
    ideas[id] = idea_object;
    // Return the response
    res.status(201).send(idea_object);
}


/**
 * Controller for updating the idea
 */

exports.updateIdea = (req, res) => {
    //Read the idea id
    const ideas_id = req.params.id;

    //Check if idea exists or not
    if(ideas[ideas_id]){
        const ideas_id = req.body;
        ideas[ideas_id] = idea_obj;
        res.status(200).send(ideas_id);
    } else {
        res.status(404).send({
            message: `Idea doesnt exist for the given requested id ${ideas_id}`
        })
    }
}

/**
 * Controller for deleting the idea based on the id 
 */

exports.deleteIdea = (req, res) => {
    //Fethc the idea id

    const idea_id = req.params.id;
    if(ideas[idea_id]){
        delete ideas[idea_id];
        res.status(200).send({
            message : `Idea with the id : ${idea_id} is deleted`
        })
    } else {
        res.status(404).send({
            message: `Idea doesnt exist for the given requested id ${ideas_id}`
        })
    }
}