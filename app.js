const express = require("express");
const app = express();
const { projects } = require("./data/data.json");

app.set("view engine", "pug");

app.use('/static', express.static("./public"));

app.get("/", (req, res) => {
    res.render('index');
});

app.get("/about", (req, res) => {
    res.render('about');
});

app.get("/project", (req, res) => {
    res.render('project');
});

app.listen(3000, () => {
    console.log('The app is running on localhost:3000');
});