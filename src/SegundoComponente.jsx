import React from "react";

export const SegundoComponente = () => {
  const libros = ["Haarry", "Games", "Play"];

  //   const libros = [];

  return (
    <div className="segundo-componente">
      <h1>Listado de libros</h1>
      {libros.length > 0 ? (
        <ul>
          {libros.map((libro, indice) => (
            <li key={indice}>{libro}</li>
          ))}
        </ul>
      ) : (
        <h2>No hay informacion</h2>
      )}
    </div>
  );
};
