import { Router }  from 'express'

const router = Router();

router.use('/room', ipLogger);

function ipLogger(req, res, next) {
    console.log(req.ip);
    next();
}

function butler(req, res, next) {
    console.log('Welcome to the mansion..')
    next()
}

function takeCoat(req, res, next) {
    req.coatOff = true;
    next();
}

router.get('/room', butler, takeCoat, (req, res, next) => {
    /*  res.send({ data: 'weclome to room 1'}); */
    console.log("You are in room 1", req.coatOff)
    next();
})

router.get('/room', (req, res, next) => {
    res.send({ data: 'welcome to room 2' })
    next();
})




export default router;