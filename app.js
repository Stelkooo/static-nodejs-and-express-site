const express = require("express");
const app = express();
const { projects } = require("./data/data.json");

app.set("view engine", "pug");

app.use("/static", express.static("./public"));

app.get("/", (req, res) => {
    res.render("index", { projects });
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/projects/:id", (req, res) => {
    const { id } = req.params;
    const project = projects[id];
    res.render("project", { project });
});

app.use((req, res, next) => {;
    res.status(404).render("page-not-found");
});

app.use((err, req, res, next) => {
    res.status(500).render('error', { err });
});

app.listen(3000, () => {
    console.log("The app is running on localhost:3000");
});