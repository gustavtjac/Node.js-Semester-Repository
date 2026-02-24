"use strict"

const express = require("express");
const app = express();

app.use(express.static(__dirname+"/public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage.html")
});


app.listen(8080, () => {
    console.log("Server running on port 8080")
});