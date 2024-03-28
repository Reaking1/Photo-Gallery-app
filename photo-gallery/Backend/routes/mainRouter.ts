import express, { Request, Response} from "express"
import { ObjectId } from "mongodb"
import { collections } from "../services/serviceworker.db"
import { PhotoModel } from "../models/Photo"

interface Photo {
    _id: ObjectId;
    title: string;
    imageUrl: string;
    // Add other properties if needed
}


export const mainRouter = express.Router();
  
mainRouter.use(express.json());


mainRouter.get("/", async (_req: Request, res:Response) => {
    try {
        const photos = (await collections.photos.find({}).toArray() as Photo[]);

        res.status(200).send(photos)
    } catch (error) {
        res.status(500).send(error.message)
    }
})
