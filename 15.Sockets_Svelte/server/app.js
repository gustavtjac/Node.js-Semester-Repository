import 'dotenv/config';
import express from 'express'

const app = express();
app.use(express.json());

import cors from 'cors';
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

import session from 'express-session';

const sessionMiddleware = session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
});

app.use(sessionMiddleware);

import nicknamesRouter from './routers/nicknamesRouter.js'
app.use(nicknamesRouter);

import http from 'http'
const server = http.createServer(app);

import { Server } from 'socket.io'
const io = new Server(server,{
    cors: {
    origin: "http://localhost:5173",
    credentials: true
  }
});

io.engine.use(sessionMiddleware);

io.on("connection", (socket) => {
    console.log("A new socket connected with id ", socket.id)

    socket.on("client-sends-color", (data) => {
        console.log(data);


        //EMITS TO ALLL SOCKETS
        io.emit("server-sends-color", data);

        //Broadcast to all sockets except itself
        /* socket.broadcast.emit("server-sends-color", data) */

        //Broadcast to ITSELF only
        /*  socket.emit("server-sends-color", data); */
    });


    socket.on("disconnect", () => {
        console.log("A socket disconnected", socket.id)

    });
});

const PORT = process.env.PORT ?? 8080;

server.listen(PORT, () => console.log("Server is running on prt " + PORT))
