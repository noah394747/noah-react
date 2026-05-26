import { useState } from "react";
import ClubeCard from "./components/ClubeCard/ClubeCard";
import ClubeButton from "./components/ClubeButton/ClubeButton";
import "./App.css";
import Clube from "./data/Clube";

function App() {
  const [listaClube] = useState([
    {
      nome: "Manchester City",
      caminhoImagem: Clube["Manchester City"].imagem,
      anoFundacao: 1880,
      championsLeague: true,
      qtdChampionsLeague: 1,
      wikipediaLink: "https://pt.wikipedia.org/wiki/Manchester_City_F.C.",
    },
    {
      nome: "Manchester United",
      caminhoImagem: Clube["Manchester United"].imagem,
      anoFundacao: 1878,
      championsLeague: true,
      qtdChampionsLeague: 3,
      wikipediaLink: "https://pt.wikipedia.org/wiki/Manchester_United_F.C.",
    },
    {
      nome: "Arsenal",
      caminhoImagem: Clube["Arsenal"].imagem,
      anoFundacao: 1886,
      championsLeague: false,
      qtdChampionsLeague: 0,
      wikipediaLink: "https://pt.wikipedia.org/wiki/Arsenal_F.C.",
    },
    {
      nome: "Chelsea",
      caminhoImagem: Clube["Chelsea"].imagem,
      anoFundacao: 1905,
      championsLeague: true,
      qtdChampionsLeague: 2,
      wikipediaLink: "https://pt.wikipedia.org/wiki/Chelsea_F.C.",
    },
    {
      nome: "Liverpool",
      caminhoImagem: Clube["Liverpool"].imagem,
      anoFundacao: 1892,
      championsLeague: true,
      qtdChampionsLeague: 6,
      wikipediaLink: "https://pt.wikipedia.org/wiki/Liverpool_F.C.",
    },
    {
      nome: "Tottenham",
      caminhoImagem: Clube["Tottenham"].imagem,
      anoFundacao: 1882,
      championsLeague: false,
      qtdChampionsLeague: 0,
      wikipediaLink: "https://pt.wikipedia.org/wiki/Tottenham_Hotspur_F.C.",
    },
  ]);

  <ClubeButton onClick={() => alert("clicou!")} />;

  return (
    <>
      <h1>BIG SIX!</h1>
      <h2>{listaClube.length} clubes na página</h2>

      <section id="center">
        {listaClube.map((clube, index) => (
          <ClubeCard
            key={index}
            nome={clube.nome}
            caminhoImagem={clube.caminhoImagem}
            anoFundacao={clube.anoFundacao}
            championsLeague={clube.championsLeague}
            qtdChampionsLeague={clube.qtdChampionsLeague}
            wikipediaLink={clube.wikipediaLink}
          />
        ))}
      </section>
    </>
  );
}

export default App;
