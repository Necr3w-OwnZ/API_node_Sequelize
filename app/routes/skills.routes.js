module.exports = app => {
    const skills = require("../controllers/skills.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", skills.create);

    router.get("/", skills.findAll);
  
    app.use('/api/skills', router);
  };