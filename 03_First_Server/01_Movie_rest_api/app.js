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

const movies = [];

for (let i = 1; i < INITIAL_MOVIE_COUNT; i++) {
    movies.push(new Movie(i, "Movie " + i, Math.floor((Math.random() * 10)) + 1))
}

app.get("/movies", (req, res) => {
    res.send({ data: movies })
});

app.get("/movies/:id", (req, res) => {
    const providedMovieId = Number(req.params.id);
    const movie = movies.find((m) => m.id === providedMovieId);

    if (!movie) {
        return res.status(404).send({ errorMessage: "Movie with id: " + req.params.id + " not found" });
    }

    return res.send({ data: movie });

});





// Statuskoder:
// 2xx Sucess
// 3xx redirection
// 4xx client side error
// 5xx server error

app.listen(PORT);

