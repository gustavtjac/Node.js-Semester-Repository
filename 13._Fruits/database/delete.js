import db from './connection.js'

const fruit = await db.fruits.deleteOne({name: 'MonsterFruit'});

console.log(fruit); 