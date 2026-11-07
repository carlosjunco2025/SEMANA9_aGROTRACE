function LoteItem({
  codigo = 'Lote sin código',
  pesoKg = 0,
  variedad = 'Variedad no especificada',
  estadoCalidad = 'En revisión',
  porcentajeDescarte,
}) {
  const claseEstado =
    estadoCalidad === 'Aprobado'
      ? 'badge--approved'
      : estadoCalidad === 'Bajo inspección'
        ? 'badge--inspection'
        : 'badge--review'

  return (
    <li className="lote-row">
      <div className="lote-description">
        <strong>{codigo}</strong>
        <span>
          {variedad}
          {porcentajeDescarte !== undefined &&
            ` · Descarte: ${Number(porcentajeDescarte).toFixed(2)}%`}
        </span>
      </div>
      <span className="lote-weight">{Number(pesoKg).toLocaleString('es-PE')} kg</span>
      <span className={`badge ${claseEstado}`}>{estadoCalidad}</span>
    </li>
  )
}

export default LoteItem
