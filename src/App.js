import './App.css';
import Filme from "./components/Filme";
import Header from "./components/Header";

function App() {

  return (
    <div className="App">
            <Header img="/logo.png"></Header>
            <div className="flex">
                <Filme img="/a-bruxa.png" nome="A Bruxa"></Filme>
                <Filme img="/a-bruxa-de-blair.png" nome="A Bruxa de Blair"></Filme>
                <Filme img="/a-noite-dos-mortos-vivos.png" nome="A Noite dos Mortos Vivos"></Filme>
                <Filme img="/dracula.png" nome="Drácula"></Filme>
                <Filme img="/exorcista.png" nome="O Exorcista"></Filme>
                <Filme img="/it.png" nome="It (1990)"></Filme>
                <Filme img="/nosferatu.png" nome="Nosferatu"></Filme>
                <Filme img="/o silencio.png" nome="O Silêncio dos Inocentes"></Filme>
                <Filme img="/o-iluminado.png" nome="O Iluminado"></Filme>
                <Filme img="/panico.png" nome="Pânico"></Filme>
            </div>
    </div>
  );
}

export default App;
