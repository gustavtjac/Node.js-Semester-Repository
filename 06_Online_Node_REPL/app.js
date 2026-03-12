import express from 'express';
const app = express();

app.use(express.static('./public'));

app.use(express.json());

app.use(replRouter)

app.use(pagesRouter)

import replRouter from './routers/replRouter.js'

import pagesRouter from './routers/pagesRouter.js'



// ========================== pages ==================================



;


// ========================== API ================================== 










// ========================== Listen ================================== 
console.log(process.env.PORT)

const PORT = process.env.PORT  || 8080;

const server = app.listen(PORT, () => {
    console.log('Server is runnning on port ' + server.address().port)
});
