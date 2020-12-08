import "./App.css";
import Game from './components/Game';

function App() {
  const cards = [
    "Achilles",
    "Agni",
    "AhMuzenCab",
    "AhPuch",
    "Amaterasu",
    "Anhur",
    "Anubis",
    "AoKuang",
    "Aphrodite",
    "Apollo",
    "Arachne",
    "Ares",
    "Artemis",
    "Artio",
    "Athena",
    "Awilix",
    "BabaYaga",
    "Bacchus",
    "Bakasura",
    "BaronSamedi",
  ].map((god) => {
    return {
      name: god,
      image: `./${god}.png`,
    };
  });

  return (
    <div className="App">
      <Game cards={cards} />
    </div>
  );
}

export default App;
