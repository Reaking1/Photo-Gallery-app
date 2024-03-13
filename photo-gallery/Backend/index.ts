import express from 'express';
import homeRouter from './routes/homeRouter'
const app = express();

app.use('/', homeRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is runnning on port ${PORT}`)
})
