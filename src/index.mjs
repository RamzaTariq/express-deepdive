import express, { response } from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/', (request,response) =>{
    response.status(200).json({message:"Hey! This is a test message"});
});

