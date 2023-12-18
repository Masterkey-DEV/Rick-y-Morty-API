export function Paginado({ paginado, setPage, page }) {
  if (paginado === "Siguiente") {
    return (
      <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        {paginado}
      </button>
    );
  } else if (paginado === "Anterior") {
    return (
      <button
        onClick={() => {
          if (page >= 1) {
            setPage(page - 1);
            return;
          }

          return;
        }}
        className={page <= 1 ? " disable" : ""}
      >
        {paginado}
      </button>
    );
  } else {
    return <button>{page}</button>;
  }
}
