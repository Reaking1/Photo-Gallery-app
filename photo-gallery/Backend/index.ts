import express from 'express';
import { mainRouter } from './routes/mainRouter';
import galleryRouter from './routes/galleryRouter'
import { error } from 'console';
//loading enviroment variables 
const app = express();

//Routes
app.use('/', mainRouter);
app.use('/gallery', galleryRouter)


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is runnning on port ${PORT}`)
})
