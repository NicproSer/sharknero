import React from "react";

export const SearchBar = ({
  value,
  handleSeachKey,
  clearSearch,
  formSubmit,
}) => {
  return (
    <div className="searchBar">
      <form onSubmit={formSubmit}>
        <input
          type="text"
          onChange={handleSeachKey}
          placeholder="Buscar por Categoria"
          value={value}
        />
        {value && <i className="bx bx-x" onClick={clearSearch}></i>}
        <button>
          <i className="bx bx-search"></i>
        </button>
      </form>
    </div>
  );
};
