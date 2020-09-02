var express = require("express");
var path = require("path");
var dbJson = require("Develop\db\db.json")

var app = express();
var PORT = process.env.PORT || 9001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", function (res, req){
    res.sendFile(path.join(__dirname, "Develop/public/index.html"));
});

app.get("/notes", function (res, req){
    res.sendFile(path.join(__dirname, "Develop/public/notes.html"))
})

app.get("/api/notes", function(req, res){
    res.json(dbJson)
});

app.post("api/notes", function(req, res){
    console.log(req, body)
});

app.delete("api/notes/:id", function (req, res){
    res.send("Delete request at /user")
});

app.get("*", function (req, res){
    res.sendFile(path.join(__dirname, index.html));
});

app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});