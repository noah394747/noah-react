import "./ClubeCard.css";
import { useNavigate, Link } from "react-router-dom";

function ClubeCard({ nome, caminhoImagem, anoFundacao, championsLeague, qtdChampionsLeague, wikipediaLink }) {
  const navigate = useNavigate();

const registrarClick = (destino) =>{
        console.log('Evento de clique enviado, destino:',destino)
        window.dataLayer.push({
            event:"click",
            destino:destino,
        })
    }
  return (
    <div className="club-card">
      <div className="card-stripe" />
      <div className="card-body">
        <div className="club-crest">
          <Link to={"/noah-react/" + encodeURIComponent(nome)} onClick={() => registrarClick("Detalhes de " + nome)} aria-label={"Ver detalhes de " + nome}>
             <img src={caminhoImagem} width={64} height={64} alt={nome} loading="lazy" style={{ objectFit: "contain" }} />
          </Link>
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
        <a href={wikipediaLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline" aria-label={"Ver " + nome + " na Wikipedia"}>
          🌐 Wikipedia
        </a>
        <button className="btn btn-solid" onClick={() => { registrarClick("Detalhes de " + nome); navigate("/noah-react/" + encodeURIComponent(nome)); }} aria-label={"Ver detalhes de " + nome}>
          Ver detalhes
        </button>
      </div>
    </div>
  );
}

export default ClubeCard;