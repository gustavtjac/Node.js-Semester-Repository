import db from './connection.js'


const newFruit = await db.fruits.insertOne({name: "MonsterFruit", price: 12})

const allRows = await db.fruits.find().toArray();

console.log(allRows);