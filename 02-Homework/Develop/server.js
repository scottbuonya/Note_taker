var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 9001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", function (res, req){
    res.sendFile(path.join(_dirname, "Develop\public\index.html"));
});

app.get("/notes", function (res, req){
    res.sendFile(path.join(_dirname, "Develop\public\notes.html"))
})

app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});