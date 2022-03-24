import React from 'react';

import { TodoContext } from '../TodoContext';

import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoForm } from "../components/TodoForm";
import { Modal } from "../components/Modal";

function AppUI() {
  const {dataStatus, searchedTodos, completeTodo, deleteTodo, openModal} = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />

      <TodoList>
        {dataStatus.error && <p>Desespérate, hubo un error...</p>}
        {dataStatus.loading && <p>Estamos cargando, no desesperes...</p>}
        {(!dataStatus.loading && !searchedTodos.length && !dataStatus.error) && <p>Crea tu primer TODO!</p>}

        { searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )) }
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton />
    </React.Fragment>
  );
}

export { AppUI };