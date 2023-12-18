import { useState } from "react";

export function Presentacion({ elem, filtro, busqueda }) {
  const [tarjetaExpandible, setTarjetaExpansible] = useState(false);

  const elementosFiltrados = elem.filter((personaje) => {
    if (
      (filtro === "" || personaje.status === filtro) &&
      (busqueda === "" ||
        personaje.name.toLowerCase().includes(busqueda.toLowerCase()))
    ) {
      return true;
    }
    return false;
  });

  return elementosFiltrados.map((personaje) => {
    return (
      <div
        key={personaje.id}
        className={"tarjeta " + (tarjetaExpandible ? "expandir" : "")}
        onClick={() => {
          setTarjetaExpansible(!tarjetaExpandible);
        }}
      >
        <h3 className="name">{personaje.name}</h3>
        <img src={personaje.image} alt={personaje.name} />
        <ul>
          <li>
            <span
              className={
                personaje.status === "Alive"
                  ? "point"
                  : personaje.status === "Dead"
                  ? "point red"
                  : "point gray"
              }
            ></span>{" "}
            Estado:{" "}
            {personaje.status === "Alive"
              ? "vivo"
              : personaje.status === "Dead"
              ? "muerto"
              : "desconocido"}
          </li>
          <li>
            Sexo: {personaje.gender === "Male" ? "masculino" : "femenino"}
          </li>
        </ul>
      </div>
    );
  });
}
