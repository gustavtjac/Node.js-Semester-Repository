import 'dotenv/config'

import express from 'express'
const app = express();


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



const port = process.env.PORT ?? 8080;

const server = app.listen(port, ()=> {
    console.log("Server running on port " + port)
})