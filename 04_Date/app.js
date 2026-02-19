"use strict"
const express = require('express');
const app = express();

app.use(express.json())

/* console.log(new Date()) */ //UTC date + time

/* console.log(Date()); */ // Local time

/* console.log(Date.now()) */ // UNIX EPOCH time standard since januaray first (milli seconds since Jan. 1st 1970)

// task create a route that returns todays day


app.get("/month/v1", (req, res) => {

    const todaysDate = new Date();

    res.status(200).send({ month : todaysDate.toLocaleString('default', { month: 'short' }) });
});


const months = [
    "January" , "Februray" , "March", 
    "April", "May", "June", "July", "August",
     "September", "October", "November", "December"]

    
app.get("/month/v2", (req, res) => {

    const todaysDate = new Date().getMonth();

    res.status(200).send({ month : months[todaysDate] });
});


// create a route that responds with todays date

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]


app.get("/day/v1", (req, res) => {

    const todaysDay = new Date().getDay();
    console.log(todaysDay)
    res.send({ day : weekdays[todaysDay] });

});


app.get("/day/v2", (req, res) => {

    const todaysDay = new Date();
    res.send({ day : todaysDay.toLocaleString('da-dk', {weekday : "long"}) });

});



/* 
    falsy values
    false, null, undefined, nan, "", '', ``

*/

app.listen(8080, (error) => {

    if(error){
        console.log("Error starting server: " + error.message);
        return;
    }

    console.log("Server is now running on port 8080")
});