import mongoose from "mongoose";

//Creating schema for photo's
interface PhotoDocument extends Document {
    title:string,
    imageUrl: string;
}

const photoSchema = new mongoose.Schema({
    title: String,
    imageUrl: String
})


//Create and export PhotoModel
export const PhotoModel = mongoose.model<PhotoDocument>('Photo', photoSchema)