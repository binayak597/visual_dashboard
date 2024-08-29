import dotenv from 'dotenv';
dotenv.config();

import express from 'express'; 
import cors from 'cors';


import { connectToDB } from './config/connectToDB.js';
import apiRoutes from './src/routes/api.routes.js';

const app = express();


app.use(cors());
app.use(express.json());




// Routes
app.use('/api', apiRoutes);



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    connectToDB();
    console.log(`server is running on port ${PORT}`);
});

