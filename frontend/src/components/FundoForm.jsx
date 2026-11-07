import { useState } from 'react'

function FundoForm({ onAgregarFundo }) {
  const [nombre, setNombre] = useState('')
  const [ubicacion, setUbicacion] = useState('')
  const [hectareas, setHectareas] = useState('')
  const [error, setError] = useState('')

  function manejarEnvio(evento) {
    evento.preventDefault()

    const nombreLimpio = nombre.trim()
    const hectareasNumero = Number(hectareas)

    if (!nombreLimpio) {
      setError('Ingresa el nombre del fundo.')
      return
    }

    if (!Number.isFinite(hectareasNumero) || hectareasNumero <= 0) {
      setError('Las hectáreas deben ser un número mayor que 0.')
      return
    }

    onAgregarFundo({
      id: globalThis.crypto?.randomUUID?.() ?? Date.now(),
      nombre: nombreLimpio,
      ubicacion: ubicacion.trim() || 'Ubicación no especificada',
      hectareas: hectareasNumero,
      estado: 'Activo',
      propietario: 'No especificado',
      validoExportacion: false,
      cupoDiarioLotes: 0,
    })
    setNombre('')
    setUbicacion('')
    setHectareas('')
    setError('')
  }

  return (
    <form className="fundo-form" onSubmit={manejarEnvio} noValidate>
      <div className="form-grid">
        <label>
          Nombre del fundo
          <input
            type="text"
            value={nombre}
            onChange={(evento) => setNombre(evento.target.value)}
            placeholder="Ej. Fundo Las Palmeras"
            autoComplete="organization"
          />
        </label>
        <label>
          Ubicación
          <input
            type="text"
            value={ubicacion}
            onChange={(evento) => setUbicacion(evento.target.value)}
            placeholder="Distrito, provincia"
            autoComplete="address-level2"
          />
        </label>
        <label>
          Superficie (hectáreas)
          <input
            type="number"
            value={hectareas}
            onChange={(evento) => setHectareas(evento.target.value)}
            min="0"
            step="any"
            placeholder="Ej. 25.5"
          />
        </label>
      </div>
      {error && <p className="form-error" role="alert">{error}</p>}
      <button className="primary-button" type="submit">Agregar fundo</button>
    </form>
  )
}

export default FundoForm
