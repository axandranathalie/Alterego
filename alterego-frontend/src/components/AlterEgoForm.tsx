import { useState } from "react";
import "../styles/AlterEgoForm.scss";
import type { AlterEgoProfile } from "../types/index"; // ändra sökväg vid behov

type Props = {
  onSuccess: (profile: AlterEgoProfile) => void;
};

type AlterEgoFormState = {
  name: string;
  description: string;
  color: string;
  emoji: string;
  mood: string;
  species: string;
  secretFantasy: string;
  musicOpinion: string;
  favoriteFood: string;
  superpowers: string; // som textfält
  likes: string;       // som textfält
};


const AlterEgoForm = ({ onSuccess }: Props) => {
  const [formData, setFormData] = useState<AlterEgoFormState>({
    name: "",
    description: "",
    color: "#ffffff", // standardfärg
    emoji: "",
    mood: "",
    species: "",
    secretFantasy: "",
    musicOpinion: "",
    favoriteFood: "",
    superpowers: "",
    likes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const dataToSend: AlterEgoProfile = {
      ...formData,
      superpowers: formData.superpowers.split(",").map((s) => s.trim()),
      likes: formData.likes.split(",").map((l) => l.trim()),
    };

    const res = await fetch(`${import.meta.env.VITE_API_URL}/profiles`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataToSend),
    });

    const result = await res.json();
    console.log("🦸 Alter ego sparat:", result);
    onSuccess(result);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <label htmlFor="name">Namn</label>
      <input
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <label htmlFor="emoji">Emoji</label>
      <input
        id="emoji"
        name="emoji"
        value={formData.emoji}
        onChange={handleChange}
      />

      <label htmlFor="color">Färg</label>
      <input
        id="color"
        name="color"
        type="color"
        value={formData.color}
        onChange={handleChange}
      />

      <label htmlFor="description">Beskrivning</label>
      <textarea
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />

      <label htmlFor="mood">Stämning (t.ex. kaos, zen...)</label>
      <input
        id="mood"
        name="mood"
        value={formData.mood}
        onChange={handleChange}
      />

      <label htmlFor="species">Art (t.ex. människa, alien...)</label>
      <input
        id="species"
        name="species"
        value={formData.species}
        onChange={handleChange}
      />

      <label htmlFor="secretFantasy">Hemlig fantasi</label>
      <input
        id="secretFantasy"
        name="secretFantasy"
        value={formData.secretFantasy}
        onChange={handleChange}
      />

      <label htmlFor="musicOpinion">Vad tycker du om musik?</label>
      <input
        id="musicOpinion"
        name="musicOpinion"
        value={formData.musicOpinion}
        onChange={handleChange}
      />

      <label htmlFor="favoriteFood">Favoritmat</label>
      <input
        id="favoriteFood"
        name="favoriteFood"
        value={formData.favoriteFood}
        onChange={handleChange}
      />

      <label htmlFor="superpowers">Superkrafter (komma-separerade)</label>
      <input
        id="superpowers"
        name="superpowers"
        value={formData.superpowers}
        onChange={handleChange}
      />

      <label htmlFor="likes">Gillar (komma-separerade)</label>
      <input
        id="likes"
        name="likes"
        value={formData.likes}
        onChange={handleChange}
      />

      <button type="submit">Skicka in mitt alter ego</button>
    </form>
  );
};

export default AlterEgoForm;
