"use strict"

import express from 'express'
/* const express = require('express'); */
const app = express();
/* const commonJsCookiesUtil = require('./util/commonJSCookiesUtil.js') */
/* import {esModuleCookieFactory} from "./util/esModuleCookiesUtil.js"; */


app.use(express.static('public'));

import path from 'path';

app.get("/cookiefactory", (req, res) => {
    res.sendFile(path.resolve("public/cookieFactory/cookieFactory.html"))
});


const agreement = {
    publicVote: "Ja"
};

const { publicVote } = agreement;

app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/frontpage/frontpage.html"))
});


app.get('/redirection', (req, res) => {
    res.sendFile(path.resolve('public/redirection/redirection.html'))
});

app.listen(8080, () => {
    console.log("Server running on port 8080")
});