import "./App.css";
import { useState, useEffect } from "react";
import { Presentacion } from "./componentes/presentacion";
import { Navigator } from "./componentes/nav";
import { Paginado } from "./componentes/Paginado";

function App() {
  const [elementos, setElementos] = useState([]);
  const [page, setPage] = useState(1);
  const [filtro, setFiltro] = useState("");
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setElementos(data.results);
      });
  }, [page, filtro, busqueda]); // Agregar page como una dependencia para que useEffect se dispare cuando cambie

  return (
    <>
      <h1>Rick y Morty api</h1>

      <Navigator
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        filtro={filtro}
        setFiltro={setFiltro}
      />

      <main className="elementos">
        <Presentacion elem={elementos} filtro={filtro} busqueda={busqueda} />
      </main>

      <footer>
        <Paginado paginado="Anterior" setPage={setPage} page={page} />
        <Paginado page={page} />
        <Paginado paginado="Siguiente" setPage={setPage} page={page} />
      </footer>
    </>
  );
}

export default App;
