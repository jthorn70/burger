var express = require("express");


var routes = require("./controllers/burgers_controllers.js");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.use('/',routes);

app.listen(PORT, function() {
    console.log("Server is running on http://localhost: " + PORT);
})

