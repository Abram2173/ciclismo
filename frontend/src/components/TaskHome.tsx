// TaskHome.tsx

import React from 'react';


interface Props {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

function TaskHome({ setIsLoggedIn }: Props) {
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <button onClick={handleLogout}>Cerrar sesión</button>
      <h2>¡Bienvenido!</h2>

    </div>
  );
}

export default TaskHome;
