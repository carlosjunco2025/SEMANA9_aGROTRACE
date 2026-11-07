function Tarjeta({ titulo, children, claseColor = '' }) {
  return (
    <section className={`tarjeta ${claseColor}`.trim()}>
      <h2 className="tarjeta-titulo">{titulo}</h2>
      {children}
    </section>
  )
}

export default Tarjeta
