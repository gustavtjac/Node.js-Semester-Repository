import { Router } from 'express';
import db from '../DB/connection.js' 
const router = Router();


router.get('/recipes', async (req, res) => {

    const recipes = await db.all(`SELECT * FROM recipes;`);

    console.log()

    res.send({ data: recipes});
});

router.post('/recipes', async (req, res) => {

    const { recipeName, description, minutesToCook } = req.body;


    // Kæmpe fyfy, åbner op for SQL injections

   const result = await db.run(`
        INSERT INTO recipes 
        (recipe_name, description, minutes_to_cook ) 
        VALUES (?, ?, ?)
    `, [recipeName, description, minutesToCook])

    // ' OR 1 = 1;

    res.send({ data: { id: result.lastID } })
});



export default router;