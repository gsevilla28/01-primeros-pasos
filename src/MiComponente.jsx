import React from "react";

const MiComponente = () => {
  //   const nombre = "Gerardo";
  //   const web = "@jsevilla";

  let usuario = {
    nombre: "Gerardo",
    apellido: "Sevilla",
    web: "@jsevilla",
  };

  console.log(usuario);

  return (
    <div>
      <hr />
      <h2>Mi Primer Componente</h2>
      <h3>Datos del usuario</h3>
      <ul>
        <li>Nombre: {usuario.nombre}</li>
        <li>Web: {usuario.web}</li>
      </ul>
      <ul>
        <li>Angular</li>
        <li>React</li>
        <li>Vite</li>
      </ul>
    </div>
  );
};

export default MiComponente;
