import React from 'react';

function SearchBar() {
    return (
        <div className="search-bar">
            <input type="text" placeholder="Buscar productos..." />
            <button type="button">Buscar</button>
        </div>
    );
}

export default SearchBar;