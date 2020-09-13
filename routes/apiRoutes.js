var path = require("path");
var fs = require("fs");
// var notesData = require("../db/db.json");

module.exports = function (app){

    app.get("/api/notes", function(req,res){
        fs.readFile("./db/db.json","utf8", function (err,data){
            if(err){
                console.log("There was an error when reading the DB");
                console.log(err);
            }    
            res.send(data);
            console.log("DB read!");
            console.log(data); 
        });
    });  

    app.post("/api/notes", function(req,res){
        let newNote = JSON.stringify(req.body) ;
        fs.appendFile("./db/db.json", newNote, function(err){
            if(err){
                console.log(err);
            }

            res.send(fs.readFileSync("./db/db.json", "utf8"));
        });
    });  


    app.delete("/api/notes", function(req,res){

    });  

    
};