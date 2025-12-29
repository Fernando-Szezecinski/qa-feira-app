import React from 'react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

/**
 * Componente de barra de pesquisa
 * Permite buscar produtos por nome
 */
const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="search-bar" data-testid="search-bar">
      <input
        id="search-input"
        data-testid="search-input"
        className="search-input"
        type="text"
        placeholder="Buscar produtos..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
