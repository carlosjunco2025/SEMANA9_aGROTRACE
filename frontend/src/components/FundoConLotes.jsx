import FundoCard from './FundoCard.jsx'
import LoteItem from './LoteItem.jsx'

function FundoConLotes({ fundo, lotes = [] }) {
  const lotesAsignados = lotes.filter((lote) => lote.fundoId === fundo.id)
  const pesoTotalKg = lotesAsignados.reduce(
    (total, lote) => total + Number(lote.pesoKg),
    0,
  )

  return (
    <article className="fundo-card">
      <FundoCard {...fundo} />
      <div className="lotes-section">
        <div className="lotes-heading">
          <h4>Lotes recepcionados</h4>
          <span>{lotesAsignados.length} registros</span>
        </div>
        {lotesAsignados.length > 0 ? (
          <ul className="lotes-list">
            {lotesAsignados.map((lote) => (
              <LoteItem key={lote.id} {...lote} />
            ))}
          </ul>
        ) : (
          <p className="empty-lotes">
            Este fundo todavía no tiene lotes recepcionados.
          </p>
        )}
        <p className="total-peso">
          Total recepcionado: <strong>{pesoTotalKg.toLocaleString('es-PE')} kg</strong>
        </p>
      </div>
    </article>
  )
}

export default FundoConLotes
