import express from 'express';
const app = express();

app.use(express.json());

import recipeRouter from './routers/recipesRouter.js'
app.use(recipeRouter);

const PORT = process.env.PORT ?? 8080;

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});