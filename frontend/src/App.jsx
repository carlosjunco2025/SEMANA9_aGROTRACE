import { useState } from 'react'
import './App.css'
import { fundos, lotes } from './datos.js'
import FundoBuscador from './components/FundoBuscador.jsx'
import FundoConLotes from './components/FundoConLotes.jsx'
import FundoForm from './components/FundoForm.jsx'
import Tarjeta from './components/Tarjeta.jsx'

function App() {
  const [listaFundos, setListaFundos] = useState(fundos)
  const [busqueda, setBusqueda] = useState('')

  const fundosFiltrados = listaFundos.filter((fundo) =>
    fundo.nombre.toLocaleLowerCase('es').includes(busqueda.trim().toLocaleLowerCase('es')),
  )
  const totalPesoKg = lotes.reduce((total, lote) => total + lote.pesoKg, 0)
  const lotesEnRevision = lotes.filter(
    (lote) => lote.estadoCalidad !== 'Aprobado',
  ).length

  function agregarFundo(nuevoFundo) {
    setListaFundos([...listaFundos, nuevoFundo])
  }

  return (
    <main className="agrotrace-container">
      <header className="page-header">
        <div>
          <p className="eyebrow">Plataforma de trazabilidad agrícola</p>
          <h1>AgroTrace</h1>
          <p className="page-intro">
            Control de fundos productores y lotes recepcionados.
          </p>
        </div>
        <span className="demo-label">Módulo agrícola · Datos de ejemplo</span>
      </header>

      <section className="summary-grid" aria-label="Resumen de recepción">
        <article className="summary-card">
          <span className="summary-label">Fundos registrados</span>
          <strong>{listaFundos.length}</strong>
          <span className="summary-footnote">unidades productoras</span>
        </article>
        <article className="summary-card">
          <span className="summary-label">Lotes recepcionados</span>
          <strong>{lotes.length}</strong>
          <span className="summary-footnote">registros en el periodo</span>
        </article>
        <article className="summary-card">
          <span className="summary-label">Peso bruto total</span>
          <strong>{totalPesoKg.toLocaleString('es-PE')} kg</strong>
          <span className="summary-footnote">suma de todos los lotes</span>
        </article>
        <article className="summary-card summary-card--attention">
          <span className="summary-label">Requieren atención</span>
          <strong>{lotesEnRevision}</strong>
          <span className="summary-footnote">pendientes o en inspección</span>
        </article>
      </section>

      {lotesEnRevision > 0 && (
        <aside className="global-alert" role="status">
          <span className="alert-icon" aria-hidden="true">!</span>
          <p>
            Hay <strong>{lotesEnRevision}</strong> lotes pendientes o bajo
            inspección que requieren seguimiento.
          </p>
        </aside>
      )}

      <div className="management-grid">
        <Tarjeta titulo="Registrar fundo" claseColor="tarjeta-formulario">
          <FundoForm onAgregarFundo={agregarFundo} />
        </Tarjeta>
        <Tarjeta titulo="Filtrar fundos" claseColor="tarjeta-busqueda">
          <FundoBuscador
            busqueda={busqueda}
            onBusquedaChange={setBusqueda}
          />
        </Tarjeta>
      </div>

      <section className="section-heading">
        <div>
          <p className="eyebrow">Relación productor → recepción</p>
          <h2>Fundos productores</h2>
        </div>
        <span className="record-count">{fundosFiltrados.length} fundos</span>
      </section>

      <Tarjeta titulo="Fundos y lotes asignados" claseColor="tarjeta-resultados">
        {fundosFiltrados.length === 0 ? (
          <div className="empty-state" role="status">
            <span aria-hidden="true">⌂</span>
            <p>No se encontraron fundos que coincidan</p>
          </div>
        ) : (
          <div className="fundos-grid">
            {fundosFiltrados.map((fundo) => (
              <FundoConLotes key={fundo.id} fundo={fundo} lotes={lotes} />
            ))}
          </div>
        )}
      </Tarjeta>

      {lotes.length === 0 && (
        <p className="empty-global">No hay lotes recepcionados para mostrar.</p>
      )}

      <footer className="page-footer">
        <span>AgroTrace · Desarrollo de Aplicaciones Empresariales</span>
        <span>Los datos mostrados son mock y no provienen de la API.</span>
      </footer>
    </main>
  )
}

export default App
