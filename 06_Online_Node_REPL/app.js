import express from 'express';
const app = express();

app.use(express.static('./public'))

app.use(express.json())

import path from 'path';

// ========================== pages ==================================
app.get('/', (req, res) => {
    res.sendFile(path.resolve('public/frontpage/frontpage.html'))
});

app.get('/about', (req, res) => {
    res.sendFile(path.resolve('public/about/about.html'))
});


// ========================== API ================================== 

import { executeCodeInSandbox, getOrCreateSandboxContext } from './util/replUtil.js';


app.post('/api/repl', (req, res) => {

    if(!req.body){
        return res.status(400).send({errorMessage: 'Missing a JSON body'})
    }

    const { replCode, sandboxId } = req.body


    if(!replCode) return res.status(400).send({errorMessage: 'Missing the key replCode in the JSON body'})


    const sandbox = getOrCreateSandboxContext(sandboxId)

    const { error, success, output, result } = executeCodeInSandbox(sandbox, replCode)

    if(error){
        return res.status(500).send({ errorMessage: 'Error execuing the provided code' })
    }

    res.send({ data: { success, output, result } });
});






// ========================== Listen ================================== 
console.log(process.env.PORT)

const PORT = process.env.PORT  || 8080;

const server = app.listen(PORT, () => {
    console.log('Server is runnning on port ' + server.address().port)
});
