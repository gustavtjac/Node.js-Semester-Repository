import db from './connection.js'


const updatedFruit = await db.fruits.updateMany({name: "MonsterFruit", price: 12},{$set : {price: 230}})

const allRows = await db.fruits.find().toArray();

console.log(allRows);