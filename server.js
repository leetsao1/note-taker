
// DEPENDENCIES 
var express = require ("express");
var path = require("path");

//EXPRESS APP
var app = express();
var PORT = process.env.PORT || 3000;

//Set up parsing handling
app.use(express.urlencoded ({extended: true}));
app.use(express.json());
app.use(express.static(__dirname));

//ROUTES
require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

//SERVER HANDLE

//START SERVER - LISTENING
app.listen(PORT, function(){
    console.log(`Now listening on : http://localhost:${PORT}`);
});