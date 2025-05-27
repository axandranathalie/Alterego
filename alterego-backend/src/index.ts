import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import profileRoutes from './routes/profileRoutes';

import Profile from './models/Profile';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/profiles', profileRoutes);

// === Anslut till MongoDB ===
mongoose.connect(process.env.MONGO_URI as string)
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err: Error) => console.error('❌ MongoDB error:', err));

// === ROUTES ===

// POST: skapa ny profil
app.post('/api/profiles', async (req: Request, res: Response) => {
  try {
    const profile = new Profile(req.body);
    await profile.save();
    res.status(201).json(profile);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

// GET: hämta alla profiler
app.get('/api/profiles', async (_req: Request, res: Response) => {
  const profiles = await Profile.find();
  res.json(profiles);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
