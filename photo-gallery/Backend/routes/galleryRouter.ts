import express, {Router,Request, Response} from "express"
import {PhotoModel} from '../models/Photo'

//initialise router
const router:Router = express.Router();

//Define route to display collection of photos
router.get('/', async (req:Request, res:Response) => {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = 10;
        const skip = (page -1) * limit;

        const photos = await PhotoModel.find().skip(skip).limit(limit);
        res.json(photos);
    } catch (error) {
        res.status(500).json({message: 'Internal server error'});
    }
});

//Define route to search specific photos
router.get('/search', async(req: Request, res:Response) => {
    try {
        const query = req.query.q as string;

        const photos = await PhotoModel.find({ $text: {$search: query}});
        res.json(photos)
    } catch (error) {
        res.status(500).json({message: 'Internal server error'});
    }
})

export default router;