import express from 'express';
import homeRouter from './routes/homeRouter'
import mongoose from 'mongoose';
import galleryRouter from './routes/galleryRouter'
import dotenv from "dotenv"
import { error } from 'console';

//loading enviroment variables 
const app = express();
dotenv.config()


//MongoDB connection
const mongodbUri = process.env.MONGOURI;
if (!mongodbUri) {
    console.error('MongoDB connnection is not defined')
    process.exit(1);
}
mongoose.connect(process.env.MONGOURI);
const db = mongoose.connection;

//Event handling for mongoDB connection
db.on('error', console.error.bind(console, 'MongoDB connection error'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

//Routes
app.use('/', homeRouter);
app.use('/gallery', galleryRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is runnning on port ${PORT}`)
})
