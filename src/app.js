const MONGO_URI=`mongodb+srv://acccarolina:qSDoqtjEi0cl76v2@cluster0.5cwsly0.mongodb.net/Adoptme?retryWrites=true&w=majority&appName=Cluster0` 
import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';

//importamos el nuevo router:
import mocksRouter from './routes/mocks.router.js'

const app = express();
const PORT = process.env.PORT||8080;

const connection = mongoose.connect(MONGO_URI)

app.use(express.json());
app.use(cookieParser());

app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);
app.use ('/api/mocks', mocksRouter )
app.listen(PORT,()=>console.log(`Listening on ${PORT}`))
