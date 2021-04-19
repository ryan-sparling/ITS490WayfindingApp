import * as express from 'express';

import DB from './db'
import Locations from './db/locations';

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('World');
});


router.get('/api/locations', async (req,res) => {
    try{
        let locations = await DB.Locations.all();
        res.json(locations);
    } 
    catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
    
})

export default router;