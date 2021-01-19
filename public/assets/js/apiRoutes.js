var data = require("/db/db.json");

module.exports = function(app) {
// The function below sends the data from the html file and sends it into the database.
  app.get("../db/db.json", function(req, res) {
    res.json(data);
  });

// The function below calls the note saved and posts it to the page
  app.post("../db/db.json", function(req, res) {
    if (notesData.length < 1) {
      notesData.push(req.body);
      res.json(true);
    };
  });
// function to delete saved notes
  app.delete("../db/db.json/:id", function(req) {
//  need to figure out how to do this part
  });
};
// The code seen above was inspired from the "HotRestaurant" activity found in section 11-express,01-Activities..apiRoutes.js file