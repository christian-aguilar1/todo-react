import React from 'react';
import './EmptyTodos.css';

function EmptyTodos({ error }) {
  return (
    <div className="container">
      <p>Crea tu primer TODO!</p>
    </div>
  );
}

export {EmptyTodos};
