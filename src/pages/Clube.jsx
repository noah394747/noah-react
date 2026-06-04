import { useParams } from "react-router-dom";
import clubes from "../data/Clube";

function Clube() {
  const { clubeNome } = useParams();

  const nome = decodeURIComponent(clubeNome); 
  const clube = clubes[nome];

  if (!clube) {
    return <h1>Clube não encontrado</h1>;
  }

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>{nome}</h1>
      <img
        src={clube.imagem}
        width={260}
        height={280}
        alt={nome}
        title={nome}
      />
    </div>
  );
}

export default Clube;