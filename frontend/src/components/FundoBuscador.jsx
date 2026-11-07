function FundoBuscador({ busqueda, onBusquedaChange }) {
  return (
    <label className="search-field">
      <span>Buscar por nombre</span>
      <input
        type="text"
        value={busqueda}
        onChange={(evento) => onBusquedaChange(evento.target.value)}
        placeholder="Ej. Santa Elena"
        aria-label="Buscar fundos por nombre"
      />
    </label>
  )
}

export default FundoBuscador
