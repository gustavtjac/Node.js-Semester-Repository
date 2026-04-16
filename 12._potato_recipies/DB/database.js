import db from './connection.js'



const deleteMode = process.argv.includes('--delete');



if(deleteMode) {
await db.exec('DROP TABLE IF EXISTS ingredients');
await db.exec('DROP TABLE IF EXISTS recipes');
}

/* Conventions for SQL
    1. Use Snake case 
    2. Plural
    3. use lowercase for tables
*/
/* 
.exec() // Run DCl / DDL
.run() // Run a query with no return value
.all() // Run a query and retrive resultset
*/



// DDL
// ingredients and  recipies
await db.exec(`
    CREATE TABLE IF NOT EXISTS recipes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        recipe_name VARCHAR(100) NOT NULL,
        description TEXT, 
        minutes_to_cook INTEGER
    );

    CREATE TABLE IF NOT EXISTS ingredients(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        recipe_id INTEGER,
        ingredient_name text NOT NULL,
        units INTEGER NOT NULL,
        unit_of_measurement TEXT CHECK(unit_of_measurement IN ("l","kg","unit")),
        FOREIGN KEY (recipe_id) REFERENCES recipes (id)
    );
`)


//seeding
if(deleteMode){
await db.run(`INSERT INTO recipes (recipe_name) VALUES ('Potato Pancakes');`);
await db.run(` INSERT INTO recipes VALUES (2,'Baked Potato','Also known as a jacket potato', 40);`)
await db.run(`INSERT INTO ingredients (recipe_id, ingredient_name, units, unit_of_measurement) VALUES (1,'flour','0.06','kg')`)
await db.run(`INSERT INTO ingredients (recipe_id, ingredient_name, units, unit_of_measurement) VALUES (2,'bacon','1','kg')`)
}
