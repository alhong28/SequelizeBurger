var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/burgerss", function(req, res) {
    // Write code here to retrieve all of the todos from the database and res.json them
    // back to the user
    db.Burger.findAll().then(function(data) {
      res.json(data);
    }).catch(function(err) {
      if (err) throw err;
    });
  });

  // POST route for saving a new todo. We can create todo with the data in req.body
  app.post("/api/burgers", function(req, res) {
    // Write code here to create a new todo and save it to the database
    // and then res.json back the new todo to the user
    db.Burger.create(req.body).then(function(data) {
      res.json(data);
    });

  });

  // DELETE route for deleting todos. We can get the id of the todo to be deleted from
  // req.params.id
  app.delete("/api/burgers/:id", function(req, res) {

  });

  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put("/api/burgers", function(req, res) {

  });
};