import { useState } from 'react';

const AlterEgoForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch(`${import.meta.env.VITE_API_URL}/profiles`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, description })
    });

    const data = await response.json();
    console.log('Inskickat:', data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Namn:
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Beskrivning:
        <input value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <button type="submit">Skicka in</button>
    </form>
  );
};

export default AlterEgoForm;
