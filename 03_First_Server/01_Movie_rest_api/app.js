"use strict";

const express = require("express");
const app = express();
// Hjælper med at parse body
app.use(express.json());


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

let currentId = INITIAL_MOVIE_COUNT + 1;

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

app.post("/movies", (req, res) => {

    const postedMovie = req.body

    if(!postedMovie){
        return res.status(400).send({ errorMessage: "Cannot create a movie without posting a body"});
    }

    if (!postedMovie.name || !postedMovie.rating) {
        return res.status(400).send({ errorMessage: "Cannot create movie with following parameters: name=" + postedMovie.name + ", rating=" + postedMovie.rating });
    }

    const newId = currentId++;

    const createdMovie = new Movie(
        newId,
        postedMovie.name,
        postedMovie.rating
    );

    movies.push(createdMovie)

    return res.status(201).send({ data: createdMovie });

});

app.put("/movies/:id", (req, res) => {

    const providedMovieId = Number(req.params.id);

    const postedMovie = req.body

    if (!postedMovie.name || !postedMovie.rating) return res.status(400).send({ errorMessage: "Cannot update movie with following parameters: name=" + postedMovie.name + ", rating=" + postedMovie.rating });

    const movieWithSameId = movies.find((m) => m.id === providedMovieId);

    if (!movieWithSameId) return res.status(400).send({ errorMessage: "Cannot find movie with id: " + providedMovieId });

    movieWithSameId.name = postedMovie.name;
    movieWithSameId.rating = postedMovie.rating;

    return res.status(200).send({
        data: movieWithSameId
    });

});

app.patch("/movies/:id", (req, res) => {

    const providedMovieId = Number(req.params.id);

    const foundMovieIndex = movies.findIndex((movie) => movie.id === providedMovieId);

    if (foundMovieIndex === -1) return res.status(400).send({ errorMessage: "Cannot find movie with id: " + providedMovieId });

    const movieToBeChanged = movies[foundMovieIndex]

    const updates = req.body

    if(!updates) return res.status(400).send({ errorMessage: "Cannot patch movie with no posted body" });

    Object.keys(updates).forEach(key => {
        if (key === "id") return;

        if (movieToBeChanged.hasOwnProperty(key)) {
            movieToBeChanged[key] = updates[key];
        }
    });

    return res.status(200).send({
        data: movieWithSameId
    });

});


app.delete("/movies/:id", (req, res) => {

    const providedMovieId = Number(req.params.id);

    const foundMovieIndex = movies.findIndex((movie) => movie.id === providedMovieId);

    if (foundMovieIndex === -1) {
        return res.status(400).send({ errorMessage: "Movie with id: " + req.params.id + " not found" });
    }

    const deletedMovie = movies.splice(foundMovieIndex, 1)

    return res.status(204).send({
        data: movies[deletedMovie],
        message: "Movie deleted"
    });

});


// Statuskoder:
// 2xx Sucess
// 3xx redirection
// 4xx client side error
// 5xx server error

app.listen(PORT);

