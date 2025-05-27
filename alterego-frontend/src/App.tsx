import './styles/App.scss';
import AlterEgoForm from './components/AlterEgoForm';
import BackgroundWrapper from './components/BackgroundWrapper';


function App() {
  return (
    <BackgroundWrapper>
  <div className="App">
      <h1>Skapa ditt alter ego 🦸‍♀️</h1>
      <AlterEgoForm />
    </div>
    </BackgroundWrapper>
  );
}

export default App;
