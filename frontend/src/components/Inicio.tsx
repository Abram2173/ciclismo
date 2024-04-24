// Inicio.tsx
import { Link } from 'react-router-dom';

function Inicio() {
  return (
    <div>
      <h1>Página de Inicio</h1>
      <Link to="/crear-cuenta">Crear Cuenta</Link>
      <Link to="/otra-pagina">Otra Página</Link>
    </div>
  );
}

export default Inicio;
