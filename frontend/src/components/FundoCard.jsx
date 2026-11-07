import { useState } from 'react'

function FundoCard({
  nombre = 'Fundo sin nombre',
  ubicacion = 'Ubicación no especificada',
  hectareas = 0,
  estado = 'Activo',
  propietario = 'No especificado',
  validoExportacion = false,
}) {
  const [contadorFavorito, setContadorFavorito] = useState(0)
  const favoritoDeshabilitado =
    estado === 'Inactivo' || estado === 'Capacidad Máxima'
  const claseEstado =
    estado === 'Activo'
      ? 'badge--approved'
      : estado === 'Capacidad Máxima'
        ? 'badge--inspection'
        : 'badge--review'

  return (
    <div className="fundo-card-header">
      <div className="fundo-avatar" aria-hidden="true">
        {nombre.charAt(0).toUpperCase()}
      </div>
      <div className="fundo-title">
        <h3>{nombre}</h3>
        <span>{ubicacion} · RUC / DNI: {propietario}</span>
      </div>
      <span className={`badge ${claseEstado}`}>{estado}</span>

      <div className="fundo-metrics">
        <div>
          <span>Superficie</span>
          <strong>{Number(hectareas).toFixed(2)} ha</strong>
        </div>
        <div>
          <span>Exportación</span>
          <strong>{validoExportacion ? 'Apto' : 'En revisión'}</strong>
        </div>
      </div>

      <button
        className="favorite-button"
        type="button"
        onClick={() => setContadorFavorito((actual) => actual + 1)}
        disabled={favoritoDeshabilitado}
        aria-label={`Marcar ${nombre} como favorito`}
      >
        {contadorFavorito > 0
          ? `★ Favorito (${contadorFavorito})`
          : '☆ Marcar favorito'}
      </button>
    </div>
  )
}

export default FundoCard
