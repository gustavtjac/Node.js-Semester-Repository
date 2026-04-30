import db from './connection.js'

const fruit = await db.fruits.find({name: 'Banana'}).toArray();

console.log(fruit); 