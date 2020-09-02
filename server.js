var express = require("express");
var path = require("path");
var dbJson = require("./db/db.json")
var fs = require("fs");
var app = express();
var PORT = process.env.PORT || 9001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", function (req, res){
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/notes", function (req, res){
    res.sendFile(path.join(__dirname, "/public/notes.html"))
})

app.get("/api/notes", function(req, res){
    res.json(dbJson)
});

app.post("/api/notes", function(req, res){
    var newNote = req.body;
    dbJson.push(newNote)
    fs.writeFile(path.join(__dirname, "./db/db.json"), JSON.stringify(dbJson), "utf8", function(err) {
        if(err) throw err;
        res.json(dbJson)
    })
});

app.delete("/api/notes/:id", function (req, res){
    res.send("Delete request at /user")
});

// app.get("*", function (req, res){
//     res.sendFile(path.join(__dirname, index.html));
// });

app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});