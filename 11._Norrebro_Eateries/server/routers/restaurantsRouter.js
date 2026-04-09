import { Router } from "express";

const router = Router();


const restaurants = ["Sultan", "Sheik", "Hero", "Poullet", "Symfoni", "Gaza Grill"] 

router.get('/api/restaurants', (req, res) => {
    res.send({ data: restaurants })
})

export default router;




