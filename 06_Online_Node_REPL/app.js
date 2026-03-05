import express from 'express';
const app = express();
app.use(express.static('./public'))
app.use(express.json())

import path from 'path';

// ========================== pages ==================================
app.get('/', (req, res) => {
    res.sendFile(path.resolve('public/frontpage/frontpage.html'))
});


// ========================== API ================================== 

app.post('/api/repl', (req, res) => {
    let replCode = req.body?.replCode;

    if(!replCode) return res.status(400).send({errorMessage: 'Missing the key replCode in the JSON body'})

    replCode = replCode.replace('console.log(','').replace(')')

    res.send({ data: replCode});

});






// ========================== Listen ================================== 
console.log(process.env.PORT)

const PORT = process.env.PORT  || 8080;

const server = app.listen(PORT, () => {
    console.log('Server is runnning on port ' + server.address().port)
});
