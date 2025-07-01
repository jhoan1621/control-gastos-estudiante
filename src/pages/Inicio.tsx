import { Link } from 'react-router-dom'

function Inicio() {
  return (
    <div className="inicio-container">
      <h2>Bienvenido al Control de Ventas</h2>
      <p>Esta aplicación es un registro de ventas del negocio.</p>
      
      <div className="opciones">
        <h3>¿Qué deseas hacer?</h3>
        <div className="botones-inicio">
          <Link to="/agregar" className="boton-principal">
            Agregar un nueva venta
          </Link>
          <Link to="/lista" className="boton-secundario">
            Ver mis ventas
          </Link>
          <Link to="/resumen" className="boton-secundario">
            Ver resumen de ventas
          </Link>
        </div>
      </div>

      <div className="info-inicio">
        <h3>Características:</h3>
        <ul>
          <li>Registra tus ventas diarias</li>
          <li>Categoriza por tipo las ventas</li>
          <li>Visualiza tu historial</li>
          <li>Obtén un resumen de tus ventas</li>
        </ul>
      </div>
    </div>
  )
}

export default Inicio