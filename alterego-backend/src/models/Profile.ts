import mongoose, { Schema, Document } from 'mongoose';

export interface IProfile extends Document {
  name: string;
  description?: string;
  superpowers?: string[];
  likes?: string[];
  color?: string;
  emoji?: string;
  mood?: string;
  species?: string;
  secretFantasy?: string;
  musicOpinion?: string;
  favoriteFood?: string;
  createdAt?: Date;
}

const ProfileSchema = new Schema<IProfile>({
  name: { type: String, required: true },
  description: String,
  superpowers: [String],
  likes: [String],
  color: String,
  emoji: String,
  mood: String,
  species: String,
  secretFantasy: String,
  musicOpinion: String,
  favoriteFood: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model<IProfile>('Profile', ProfileSchema);
