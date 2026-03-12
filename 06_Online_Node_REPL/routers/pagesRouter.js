import { Router } from 'express';
const router = Router();


import { frontpagePage, aboutPage, contactPage } from '../util/pagesUtil.js';

router.get('/', (req, res) => {
    res.send(frontpagePage)
});


router.get('/contact', (req, res) => {
    res.send(contactPage)
})


router.get('/about', (req, res) => {
    res.send(aboutPage)
})

export default router;