"use strict";

const express = require("express");
const app = express();

const PORT = 8080;
const INITIAL_MOVIE_COUNT = 50;

class Movie {
    constructor(id, name, rating) {
        this.id = id;
        this.name = name;
        this.rating = rating;
    }
}

const movieList = [];

for (let i = 1; i < INITIAL_MOVIE_COUNT; i++) {
    movieList.push(new Movie(i, "Movie " + i, Math.floor((Math.random() * 10)) + 1))
}

app.get("/movies", (req, res) => {
    res.send({ movies: movieList })
});

app.get("/movies/:id", (req, res) => {
    const id = Number(req.params.id);
    const movie = movieList.find((m) => m.id === id);

    if (!movie) {
        return res.status(404).send({ error: "Movie not found" });
    }

    res.send({ data: movie });

});

app.listen(PORT);

