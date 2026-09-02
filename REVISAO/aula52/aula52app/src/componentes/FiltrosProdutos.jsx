export default function FiltrosProdutos({ onFiltro }) {
  return (
    <div className="filtros-produtos">
      <input 
        type="text" 
        placeholder="Buscar produtos..." 
        onChange={(e) => onFiltro(e.target.value)}
      />
    </div>
  );
}
