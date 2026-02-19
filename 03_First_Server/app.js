"Strict mode";

///Vi importerer express.js. vi gør den const så vi kan tage fat i det.
const express = require('express');

//Laver en instans a express
const app = express();


// Hjælper med at parse body
app.use(express.json());


// one-liner version
//const app = require('express')();


//printer directory i console
console.log(__dirname)

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});


//Task: create a new route called snowstorm, it should respond with a warning


app.get("/snowstorms", (req, res) => {
    res.send({ warning: "A snowstorm is coming" });
});


// how can we send data in a GET request?

// path variable
app.get("/cars/:carModel/:year", (req, res) => {
    console.log(req.params.carModel);
    res.send({ data: " Your " + req.params.carModel + " is very nice and its from " + req.params.year + "!!!!!!!!" });
});


//En call back funktion er en funktoion der bliver brugt som argument til en anden funktion


// query string/ query parameters ?variable=xxxx

app.get("/bag", (req, res) => {
    res.send({ itemsInBag: req.query });
});

app.get("/proxy", (req, res) => {
 /* 
 Create a proxy to https://www.google.com/
 You have alle the knowledge you need to solve this
 */
    const googleResponse = fetch("https://www.google.com/")
        .then(response => response.text())
        .then(result => {
           
            return res.status(200).send(result);
            
        });

});

app.post("/dinosaurs", (req, res) => {
    console.log(req.body)
    res.send({ data: req.body })
});


//Assignment: Create a POST route with the endpoint energydrinks that adds energydrinks to an array

const energydrinks = [
    { name: "Monster", taste: 10 },
    { name: "Redbull", taste: 2 },
    { name: "Booster", taste: 7 }
]

app.get("/energydrinks", (req, res) => {
    res.send({ data: energydrinks });
});

app.post("/energydrinks", (req, res) => {
    energydrinks.push(req.body);
    res.send({ data: req.body });
});


app.get("/xss", (req, res) => {
    res.sendFile(__dirname + "/xss.html")
})



//Vi sætter appen til at lytte på port 8080
app.listen(8080);

