import express from 'express'

const app = express();

app.use(express.static('public'))

import http from 'http'
const server = http.createServer(app);



import { Server } from 'socket.io'
const io = new Server(server);

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


    socket.on("disconnect", () =>{
        console.log("A socket disconnected" , socket.id)
        
    });
});

const PORT = process.env.PORT ?? 8080;

server.listen(PORT, () => console.log("Server is running on prt "+ PORT))
