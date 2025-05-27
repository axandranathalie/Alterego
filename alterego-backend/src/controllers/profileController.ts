import { Request, Response } from 'express';
import Profile from '../models/Profile';

export const createProfile = async (req: Request, res: Response) => {
  console.log("📦 Ny profil-data:", req.body);
  try {
    const profile = new Profile(req.body);
    await profile.save();
    res.status(201).json(profile);
  } catch (err: any) {
    console.error("❌ Fel vid sparning:", err.message);
    res.status(400).json({ error: err.message });
  }
};

export const getAllProfiles = async (_req: Request, res: Response) => {
  const profiles = await Profile.find().sort({ createdAt: -1 });
  res.json(profiles);
};
