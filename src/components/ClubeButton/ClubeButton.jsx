import "./ClubeButton.css";

function ClubeButton({ label, onClick }) {
  return (
    <button className="clube-button" onClick={onClick}>
      {label}
    </button>
  );
}

export default ClubeButton;