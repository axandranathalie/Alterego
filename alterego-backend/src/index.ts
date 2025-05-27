import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import profileRoutes from './routes/profileRoutes';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({
  origin: process.env.CLIENT_URL,
}));

app.use('/api/profiles', profileRoutes);

mongoose.connect(process.env.MONGO_URI as string)
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err: Error) => console.error('❌ MongoDB error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
