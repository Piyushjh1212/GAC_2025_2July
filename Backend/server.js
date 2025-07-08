import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import AuthUserRoutes from './Routes/AuthUserRoutes.js';
import connectDB from './ConfigDb/DB.config.js';
import CourseRoutes from './Routes/CourseRoute.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();
app.use(cors());
app.use(express.json());

// Api callback

app.use("/auth", AuthUserRoutes);
app.use("/Course", CourseRoutes)


app.get('/', (req, res) => {
  res.send('✅ Backend Server is running!')
});

app.listen(PORT, () => {
    console.log(` Server is running on http://localhost:${PORT} `)
});
