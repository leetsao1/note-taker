var path = require("path");
var fs = require("fs");
const util = require("util");
const { json } = require("express");

module.exports = function (app){
    fs.readFile("./db/db.json","utf8", function (err, data){
        if (err) throw err;
        var notesParse = JSON.parse(data);

        console.log(notesParse);
        // console.log(notesParse[1]);
        // notesParse.splice(0,1);
        // console.log(notesParse);

        app.get("/api/notes", function (req, res) {
            //db.json file and return of all saved notes as json
            res.json(notesParse);
            console.log("DB Read!");
        });

        app.post("/api/notes", function(req,res){
            notesParse.push(req.body);
            console.log(notesParse);

            fs.writeFile("./db/db.json",JSON.stringify(notesParse), function(err){
                if(err) throw (err);
                console.log("Data saved to DB");
            });
        });  

        app.delete("/api/notes/:id", function(req,res){
            var chosen = req.params.id;
            notesParse.splice(chosen,1);
            console.log(notesParse);

            fs.writeFile("./db/db.json", notesParse , function(err){
                if(err) throw (err);
                console.log(`The note was deleted`);
                // console.log(`The new DB is: ${notesParse}`);
   
            });

        });  

        app.get("/api/notes/:id", function (req, res) {
            // display json for the notes array indices of the provided id
            res.json(notes[req.params.id]);
        });
  
    });
};
