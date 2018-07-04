var db = require("../models");

module.exports = function(app) {
  // Find all Cards and return them to the user with res.json
  app.get("/", function(req, res) {
    db.Card.findAll({}).then(function(dbCard) {
      res.json(dbCard);
    });
  });

  app.get("/api/Card/:id", function(req, res) {
    // Find one Card with the id in req.params.id and return them to the user with res.json
    db.Card.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbCard) {
      res.json(dbCard);
    });
  });

  app.post("/api/Card", function(req, res) {
    // Create an Card with the data available to us in req.body
    console.log(req.body);
    db.Card.create(req.body).then(function(dbCard) {
      res.json(dbCard);
    });
  });

  app.delete("/api/Card/:id", function(req, res) {
    // Delete the Card with the id available to us in req.params.id
    db.Card.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbCard) {
      res.json(dbCard);
    });
  });

};
