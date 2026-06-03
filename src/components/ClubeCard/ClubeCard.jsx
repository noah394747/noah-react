import "./ClubeCard.css";

function ClubeCard({ nome, caminhoImagem, anoFundacao, championsLeague, qtdChampionsLeague, wikipediaLink }) {
  return (
    <div className="CardClube">
      <img src={caminhoImagem} width={260} height={280} alt={nome} title={nome} />
      <h2>{nome}</h2>
      <p>Fundado em {anoFundacao}</p>
      <p>{championsLeague ? `Tem ${qtdChampionsLeague} títulos da Champions League.` : "Não tem Champions League."}</p>
      <a href={wikipediaLink} target="_blank" rel="noopener noreferrer">
        <button>🌐 Ver na Wikipedia</button>
      </a>
    </div>
  );
}

export default ClubeCard;