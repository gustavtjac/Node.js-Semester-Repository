import 'dotenv/config'

import express from 'express'
const app = express();

import path from 'path'


app.use(express.static('../client/dist'));



/* app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
}); */

import session from 'express-session';

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}))



import restaurantRouter from './routers/restaurantsRouter.js';
app.use(restaurantRouter);

import visitorsRouter from './routers/visitorsRouter.js'
app.use(visitorsRouter);


app.get('/{*splat}', (req, res) => {
    res.sendFile(path.resolve('../client/dist/index.html'))
})


const port = process.env.PORT ?? 8080;

const server = app.listen(port, ()=> {
    console.log("Server running on port " + port)
})