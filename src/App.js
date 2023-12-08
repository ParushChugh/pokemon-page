
import './App.css';
import Footer from './components/Footer';
import Headers from './components/Header'
import PokemonLists from './components/PokemonLists';
import Slider from './components/Slider';

function App() {
  return (
    <div className="App">
      <Headers/>
      <Slider/>
      <PokemonLists/>
      <Footer/>

    </div>
  );
}

export default App;
