import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import connectDb from './config/database.js';
import errorHandler from './middleware/errorHandler.js';
import authRoute from './routes/authRoute.js'
import sessionRoute from './routes/sessionRoute.js'



dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;

// Puraane corsOption ko hata kar ise paste karein
app.use(cors({
  origin: 'https://hirevix-live.vercel.app', // 'https://' lagana bilkul zaroori hai
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));


connectDb();

// app.use(cors(corsOption));
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/api/health', (req,res) => {
    res.json({
        status: 'OK',
        message:'Live class server is running',
        timestamp:new Date().toISOString()
    })
})
 
//Api routes
app.use('/api/auth',authRoute)
app.use('/api/session',sessionRoute)

app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})