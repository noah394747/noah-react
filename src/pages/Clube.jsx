import { useParams, useNavigate } from "react-router-dom";
import clubes from "../data/Clube";

function Clube() {
  const { clubeNome } = useParams();
  const navigate = useNavigate();

  const nome = decodeURIComponent(clubeNome);
  const clube = clubes[nome];

  if (!clube) {
    return <h1>Clube não encontrado</h1>;
  }

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <button
        onClick={() => navigate("/noah-react/")}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "10px 20px",
          backgroundColor: "transparent",
          border: "1px solid #f0b429",
          color: "#f0b429",
          borderRadius: "8px",
          fontFamily: "DM Sans, sans-serif",
          fontWeight: "600",
          fontSize: "0.9rem",
          cursor: "pointer",
          transition: "all 0.2s ease",
          marginBottom: "2rem",
        }}
        onMouseEnter={e => {
          e.target.style.backgroundColor = "#f0b429";
          e.target.style.color = "#000";
        }}
        onMouseLeave={e => {
          e.target.style.backgroundColor = "transparent";
          e.target.style.color = "#f0b429";
        }}
      >
        ← Voltar
      </button>

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