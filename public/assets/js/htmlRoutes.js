var path = require("path");
module.eports = function(app){
    // This funtion returns notes.html file.
    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "public/assets/notes.html"));
      });
    //   This function returns the index.html file.
      app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "public/assets/index.html"));
      });    
}