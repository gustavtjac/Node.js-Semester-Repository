import { Router } from 'express'

const router = Router();



function isAdmin(req, res, next){
    //simulerer at hente fra DB
    const isAdmin = true;
    if(isAdmin){
        req.user = {
            isAdmin,
            username: 'Bob'
        };
        return next();
    }
    res.status(403).send({ errorMessage: "You are not an admin"})
}

router.get('/auth/admin', isAdmin, (req, res) => {
    res.send({data: "You are an admin, you can see this: 10 active users"})
});



export default router;