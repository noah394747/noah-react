import "./ClubeCard.css";
import { useNavigate } from "react-router-dom";

function ClubeCard({
  nome,
  caminhoImagem,
  anoFundacao,
  championsLeague,
  qtdChampionsLeague,
  wikipediaLink,
}) {
  const navigate = useNavigate();

  return (
    <div className="club-card">
      <div className="card-stripe" />
      <div className="card-body">
        <div className="club-crest">
          <img src={caminhoImagem} width={64} height={64} alt={nome} />
        </div>
        <div className="club-info">
          <p className="club-name">{nome}</p>
          <p className="club-nickname">Fundado em {anoFundacao}</p>
          <div className="club-stats">
            <div className="stat">
              <span className="stat-value">{qtdChampionsLeague}</span>
              <span className="stat-label">Champions League</span>
              <span className="club-nickname">
                {championsLeague ? "🏆 Campeão Europeu" : "🔵 Premier League"}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="card-actions">
        <a
          href={wikipediaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
          aria-label={"Ver " + nome + " na Wikipedia"}
        >
          🌐 Wikipedia
        </a>
        <button
          className="btn btn-solid"
          onClick={() => navigate("/noah-react/" + encodeURIComponent(nome))}
          aria-label={"Ver detalhes de " + nome}
        >
          Ver detalhes
        </button>
      </div>
    </div>
  );
}

export default ClubeCard;
