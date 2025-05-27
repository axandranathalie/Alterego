import { useState, useEffect } from 'react'; // <== du saknade useEffect här!
import AlterEgoForm from './components/AlterEgoForm';
import BackgroundWrapper from './components/BackgroundWrapper';
import './styles/App.scss';
import type { AlterEgoProfile } from './types';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [allProfiles, setAllProfiles] = useState<AlterEgoProfile[]>([]); // <== flyttat in rätt!

  // Hämta profiler när sidan laddas
  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/profiles`);
        const data = await res.json();
        setAllProfiles(data);
      } catch (err) {
        console.error("❌ Kunde inte hämta profiler:", err);
      }
    };

    fetchProfiles();
  }, []);

  // När en ny profil skickas in
  const handleSubmitSuccess = (profile: AlterEgoProfile) => {
    setShowForm(false);
    setAllProfiles(prev => [profile, ...prev]); // Lägg till överst i listan
  };

  return (
    <BackgroundWrapper>
      <div className="App">
        <h1>
          Skapa ditt alter ego 🦸‍♀️{' '}
          <button onClick={() => setShowForm(!showForm)} className="toggle-button">
            {showForm ? 'Stäng' : 'Här!'}
          </button>
        </h1>

        {showForm && <AlterEgoForm onSuccess={handleSubmitSuccess} />}

        {/* Visa alla profiler */}
        {allProfiles.length > 0 && (
          <div className="profile-list">
            <h2>Alla inskickade alter egon:</h2>
            {allProfiles.map((profile, index) => (
              <div key={index} className="submitted-profile">
                <h3>{profile.emoji} {profile.name}</h3>
                <p>{profile.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </BackgroundWrapper>
  );
}

export default App;
