import { useState } from "react";
import Login from "./components/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleCrearCuentaClick = () => {
    window.open("../components/CrearCuenta", "_blank"); // Abre una nueva ventana con la página de creación de cuenta
  };

  return (
    <div className="h-screen bg-zinc-950 text-white flex justify-center items-center">
      {!isLoggedIn ? (
        <Login setIsLoggedIn={setIsLoggedIn} onCrearCuentaClick={handleCrearCuentaClick} />
      ) : (
        <div>

        </div>
        
      )}
    </div>
    
  );
}

export default App;
