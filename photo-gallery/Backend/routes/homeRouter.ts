
import express, {Request, Response} from 'express'

const router = express.Router();

//Define route handler for the home page
router.get('/',( req: Request, res: Response) => {
    //Simple html response
    res.send('<h1>Hello welcome to building this project');
});

export default router;