const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Profile = require('./models/Profile');

const app = express();
app.use(express.json());
app.use(cors());

// === Anslut till MongoDB ===
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB error:', err));

// === ROUTES ===

// POST: skapa ny profil
app.post('/api/profiles', async (req, res) => {
  try {
    const profile = new Profile(req.body);
    await profile.save();
    res.status(201).json(profile);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET: hämta alla profiler
app.get('/api/profiles', async (req, res) => {
  const profiles = await Profile.find();
  res.json(profiles);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
