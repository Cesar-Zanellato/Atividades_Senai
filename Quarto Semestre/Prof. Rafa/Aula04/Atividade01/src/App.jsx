import "./App.css";
import Pessoa from "./components/Pessoa"

function App() {

  const pessoas = [
    { id: 1, nome: 'Cleópatra', profissao: 'Engenheira espacial' },
    { id: 2, nome: 'Ptolomeu', profissao: 'Bioengenheiro' },
    { id: 3, nome: 'Thutmose', profissao: 'Designer de realidade virtual' },
    { id: 4, nome: 'Hatshepsut', profissao: 'Exploradora de oceanos alienígenas' },
    { id: 5, nome: 'Perseu', profissao: 'Piloto de nave intergaláctica' },
    { id: 6, nome: 'Apolo', profissao: 'Cientista de fusão nuclear' },
    { id: 7, nome: 'Artemis', profissao: 'Geneticista de organismos extraterrestres' },
    { id: 8, nome: 'Hermes', profissao: 'Desenvolvedor de inteligência artificial avançada' },
    { id: 9, nome: 'Athena', profissao: 'Especialista em viagens no tempo' },
    { id: 10, nome: 'Zeus', profissao: 'Explorador de universos paralelos' },
    { id: 11, nome: 'Isis', profissao: 'Engenheira de teleportação quântica' },
    { id: 12, nome: 'Osiris', profissao: 'Arqueólogo de civilizações alienígenas' },
    { id: 13, nome: 'Hórus', profissao: 'Médico de regeneração celular' },
    { id: 14, nome: 'Deméter', profissao: 'Agricultora em planetas colonizados' },
    { id: 15, nome: 'Aphrodite', profissao: 'Artista holográfica' }
];

  return (
    <main className="flexLinha">
      {
        pessoas.map( (pessoa) => (
          <Pessoa key={pessoa.id} nome={pessoa.nome} profissao={pessoa.profissao}/>
        ) )
      }
    </main>
  )
}

export default App