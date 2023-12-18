export function Navigator({ busqueda, setBusqueda, filtro, setFiltro }) {
  return (
    <>
      <nav className="search-container">
        <form action="">
          <input
            type="text"
            className="search-input"
            placeholder="Buscar en esta pagina..."
            onChange={(e) => {
              console.log(e.target.value);
              setBusqueda(e.target.value);
            }}
          />
          <label htmlFor="estado">filtrar por estado:</label>
          <select
            name="estado"
            id="estados"
            onChange={(e) => {
              console.log(e.target.value);
              setFiltro(e.target.value);
            }}
          >
            <option value="">Todos</option>
            <option value="Alive">vivos</option>
            <option value="Dead">muertos</option>
            <option value="unknown">desconocidos</option>
          </select>
        </form>
      </nav>
    </>
  );
}
