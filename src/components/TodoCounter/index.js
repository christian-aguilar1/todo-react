import React from 'react';
import './TodoCounter.css';

import { TodoContext } from '../../TodoContext';

function TodoCounter() {
  const {totalTodos, completedTodos} = React.useContext(TodoContext);

  React.useEffect(() => {
      totalTodos - completedTodos > 0
        ? (document.title = `TODO React | ${totalTodos - completedTodos} ${
            totalTodos - completedTodos === 1 ? "tarea pendiente" : "tareas pendientes"
          }`)
        : (document.title = `TODO React | No  tienes tareas pendientes`);
    }, [totalTodos, completedTodos]);

    return (
        <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs</h2>
    );
}

export { TodoCounter };