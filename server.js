
// DEPENDENCIES 
var express = require ("express");
var path = require("path");

//EXPRESS APP
var app = express();
var PORT = 8080;

//Set up parsing handling
app.use(express.urlencoded ({extended: true}));
app.use(express.json());

//ROUTES
require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

// app.get("/", function(req,res){
//     res.sendFile(path.join(__dirname + "/public/index.html"));
// });

//SERVER HANDLE

//START SERVER - LISTENING
app.listen(PORT, function(){
    console.log(`Now listening on : http://localhost:${PORT}`);
});