import React from 'react';
import './TodoCounter.css';

function TodoCounter({ totalTodos, completedTodos, loading }) {
  React.useEffect(() => {
      totalTodos - completedTodos > 0
        ? (document.title = `TODO React | ${totalTodos - completedTodos} ${
            totalTodos - completedTodos === 1 ? "tarea pendiente" : "tareas pendientes"
          }`)
        : (document.title = `TODO React | No  tienes tareas pendientes`);
    }, [totalTodos, completedTodos]);

    return (
      <React.Fragment>
        {totalTodos ?
          <h2
            className={`TodoCounter ${!!loading && "TodoCounter__loading"}`}
          >
            Has completado {completedTodos} de {totalTodos} tareas
          </h2>
          :
          <h2
            className={`TodoCounter ${!!loading && "TodoCounter__loading"}`}
          >
            Agrega lo que necesites, organiza tus tareas
          </h2>
        }
      </React.Fragment>
    );
}

export { TodoCounter };