import React from "react";

export const TercerComponente = () => {
  const handleClick = (e, nombre) => {
    alert("haz dado click al button, hola " + nombre);
  };

  const handleDoubleClick = (e) => {
    alert("haz dado doble click al boton");
  };
  const hazEntrado = (e, accion) => {
    console.log(`haz ${accion} a la caja`);
  };
  const estasDentro = () => {
    console.log(`estas dentro del input`);
  };
  const estasFuera = () => {
    console.log(`estas fuera del input`);
  };

  return (
    <div>
      <h1>Eventos en React</h1>
      <p>
        {/* evento click */}
        <button onClick={(e) => handleClick(e, "gerardo")}>Dar Clic</button>
      </p>
      <p>
        {/* evento doble click */}
        <button onDoubleClick={handleDoubleClick}>Dar Clic doble</button>
      </p>
      {/* entrar y salir el raton */}
      <div
        id="caja"
        onMouseEnter={(e) => hazEntrado(e, "entrado")}
        onMouseLeave={(e) => hazEntrado(e, "salido")}
      >
        pasa por encima
      </div>
      <p>
        <input
          type="text"
          onFocus={estasDentro}
          onBlur={estasFuera}
          placeholder="Introduce tu nombre"
        />
      </p>
    </div>
  );
};
