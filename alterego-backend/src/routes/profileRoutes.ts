import express from 'express';
import { createProfile, getAllProfiles } from '../controllers/profileController';

const router = express.Router();

router.post('/', createProfile);
router.get('/', getAllProfiles);

export default router;
