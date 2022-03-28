import React from 'react';
import './EmptySearchResults.css';

function EmptySearchResults(props) {
  return (
    <div className="container">
      <p>No hay resultados para {props.searchText}!</p>
    </div>
  );
}

export {EmptySearchResults};
