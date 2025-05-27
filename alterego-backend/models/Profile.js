const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  name: { type: String, required: true },          // Alter egots namn
  description: String,                             // En kort beskrivning
  superpowers: [String],                           // Lista på superkrafter
  likes: [String],                                 // Saker de gillar
  color: String,                                   // Bakgrundsfärg på bubblan
  emoji: String,                                   // Liten emoji före namnet
  mood: String,                                    // T.ex. "busig", "kaos", "zen"
  species: String,                                 // "människa", "djur", "robot"
  secretFantasy: String,                           // Hemlig dröm eller fantasi
  musicOpinion: String,                            // Ex: "Älskar techno" eller "Hatar musik"
  favoriteFood: String,                            // Vad de alltid vill äta
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Profile', ProfileSchema);
