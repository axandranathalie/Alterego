import { Request, Response } from 'express';
import Profile from '../models/Profile';
import { getRandomColor } from '../utils/randomColor';
import { getRandomEmoji } from '../utils/randomEmoji';

// POST: Skapa ny profil
export const createProfile = async (req: Request, res: Response) => {
  try {
    const profileData = {
      ...req.body,
      color: req.body.color || getRandomColor(),
      emoji: req.body.emoji || getRandomEmoji()
    };

    const profile = new Profile(profileData);
    await profile.save();
    res.status(201).json(profile);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

// GET: Hämta alla profiler
export const getAllProfiles = async (_req: Request, res: Response) => {
  try {
    const profiles = await Profile.find();
    res.json(profiles);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
