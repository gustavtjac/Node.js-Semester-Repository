import { Router } from 'express';
const router = Router();


import { frontpagePage, aboutPage } from '../util/pagesUtil.js';

router.get('/', (req, res) => {
    res.send(frontpagePage)
});




router.get('/about', (req, res) => {
    res.send(aboutPage)
})

export default router;